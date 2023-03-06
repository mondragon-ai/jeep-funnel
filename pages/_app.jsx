import "../styles/globals.css";
import Layout from "../components/Layout";
import { ContextProvider } from "../context";
import { useEffect } from "react";
import { hotjar } from 'react-hotjar';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3395534, 6);
  }, []);

  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
