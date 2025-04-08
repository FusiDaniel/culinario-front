import { serialize } from 'cookie';

export const POST = async () => new Response(undefined, {
  headers: {
    'Set-Cookie': serialize('session', 'deleted', {
      httpOnly: true,
      maxAge: 0,
      path: '/',
      sameSite: true,
      secure: process.env.NODE_ENV !== 'development',
    }),
  },
  status: 204,
});
