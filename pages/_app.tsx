import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}