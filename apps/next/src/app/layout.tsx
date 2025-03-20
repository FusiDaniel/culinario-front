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
    lang="en"
    suppressHydrationWarning
  >
    <head>
      <link
        rel="preload"
        href="/fonts/Blinker-Bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Blinker-ExtraBold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Blinker-Light.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Blinker-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Blinker-SemiBold.ttf"
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
