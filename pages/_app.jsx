import "../styles/globals.css";
import { useState } from "react";
import Layout from "../components/Layout";
import GlobalContext from "../context/globalContext";

export default function App({ Component, pageProps }) {
  const [globalState, setGloblaState] = useState({
    first_name: "",
    email: "",
    cus_uuid: "",
    clientSecret: "",
    funnel_uuid: "fun_7626c00357",
    products: [],
    high_risk: false,
    bump: false,
  });
  return (
    <GlobalContext.Provider value={[globalState, setGloblaState]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}
