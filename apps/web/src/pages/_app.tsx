import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Create this file for global styles

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
