import "../styles/globals.css";
import Layout from "../components/Layout";
import { ContextProvider } from "../context";
import { useEffect } from "react";
import { hotjar } from 'react-hotjar';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3395534, 6);
  }, []);

  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ContextProvider>
  );
}
