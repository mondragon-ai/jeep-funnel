import { createContext, useEffect, useState } from "react";
import { getItem, saveItem } from "../lib/storage";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    first_name: "",
    email: "",
    cus_uuid: "",
    clientSecret: "",
    funnel_uuid: "fun_7626c00357",
    products: [],
    high_risk: false,
    bump: true,
    external: "SHOPIFY"
  });
  useEffect(() => {
    const {
      first_name,
      email,
      cus_uuid,
      clientSecret,
      funnel_uuid,
      products,
      high_risk,
      bump,
      external
    } = getItem("funnel_data") || state;
    setState({
      first_name,
      email,
      cus_uuid,
      clientSecret,
      funnel_uuid,
      products,
      high_risk,
      bump,
      external
    });
  }, []);

  const setGlobalState = (data) => {
    setState({ ...state, ...data });
    saveItem("funnel_data", { ...state, ...data });
  };
  const globalState = state;
  return (
    <Context.Provider value={[globalState, setGlobalState]}>
      {children}
    </Context.Provider>
  );
};
