import { ReactNode } from 'react';
import '../globals.css';
import '../fonts.css';

export const metadata = {
    title: 'Culinario',
    description: 'Culinario application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
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
            <body>{children}</body>
        </html>
    );
}
