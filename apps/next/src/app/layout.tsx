import type { Metadata } from 'next';
import { NextTamaguiProvider } from './NextTamaguiProvider';
import '../globals.css';
import '../fonts.css';

export const metadata: Metadata = {
  description: 'Tamagui, Solito, Expo & Next.js',
  icons: '/favicon.ico',
  title: 'Tamagui • App Router',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  // You can use `suppressHydrationWarning` to avoid the warning about mismatched content during hydration in dev mode
  <html
    lang="pt-br"
    suppressHydrationWarning
  >
    <head>
      <link
        rel="preload"
        href="/fonts/DMSans-Bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/DMSans-ExtraBold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/DMSans-Light.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/DMSans-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/DMSans-SemiBold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </head>
    <body>
      <NextTamaguiProvider>{children}</NextTamaguiProvider>
    </body>
  </html>
);

export default RootLayout;
