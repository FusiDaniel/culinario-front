import type { NextRequest } from 'next/server';
import { tryCatch } from '@repo/utils/src/tryCatch';
import axios, { isAxiosError } from 'axios';
import { serialize } from 'cookie';
import { NextResponse } from 'next/server';

const allowedHeadersList = ['location'];

const proxyRequest = async (request: NextRequest, method: string) => {
  const { data: body, error: bodyError } = await tryCatch(request.json());
  const params = request.nextUrl.searchParams;
  const url = `${process.env.API_GATEWAY_URL}${request.nextUrl.pathname.slice(13)}`;
  const sessionCookie = request.cookies.get('session')?.value;
  const xForwardedFor = request.headers.get('x-forwarded-for');
  const xRealIp = request.headers.get('x-real-ip');

  const { data: axiosResponse, error } = await tryCatch(
    axios({
      data: bodyError ? undefined : body,
      headers: {
        'Authorization': sessionCookie ? `Bearer ${sessionCookie}` : undefined,
        'x-client-real-ip': xForwardedFor ?? xRealIp,
      },
      maxRedirects: 0,
      method,
      params,
      url,
    }),
  );

  if (error) {
    if (isAxiosError(error) && error.response) {
      if ([302].includes(error.response.status)) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          {
            headers: {
              'Set-Cookie': serialize('session', 'deleted', {
                httpOnly: true,
                maxAge: 0,
                path: '/',
                sameSite: true,
                secure: process.env.NODE_ENV !== 'development',
              }),
            },
            status: 401,
          },
        );
      }
      return NextResponse.json(
        { error: error.message || 'Internal Server Error' },
        { status: error.response?.status || 500 },
      );
    }
    return NextResponse.json(
      { error: 'Proxy error' },
      { status: 500 },
    );
  }

  const response = NextResponse.json(axiosResponse.data, { status: axiosResponse.status });

  Object.entries(axiosResponse.headers).forEach(([key, value]) => {
    if (allowedHeadersList.includes(key)) {
      response.headers.set(key, value);
    }
  });
  return response;
};

export const GET = async (request: NextRequest) => proxyRequest(request, 'GET');
export const POST = async (request: NextRequest) => proxyRequest(request, 'POST');
export const PUT = async (request: NextRequest) => proxyRequest(request, 'PUT');
export const DELETE = async (request: NextRequest) => proxyRequest(request, 'DELETE');
export const PATCH = async (request: NextRequest) => proxyRequest(request, 'PATCH');
export const OPTIONS = async (request: NextRequest) => proxyRequest(request, 'OPTIONS');
export const HEAD = async (request: NextRequest) => proxyRequest(request, 'HEAD');
