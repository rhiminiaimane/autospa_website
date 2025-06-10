import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';
import ChatWidget from '../components/ChatWidget';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ChatWidget/>
    </>
  );
}