import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';
import ChatWidget from '@/components/ChatWidget';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/next'; // Add the import here

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ChatWidget />
      <Analytics />
    </>
  );
}