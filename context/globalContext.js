import { createContext } from "react";

const GlobalContext = createContext({
  first_name: "",
  email: "",
  cus_uuid: "",
  clientSecret: "",
  funnel_uuid: "fun_7626c00357",
  products: [],
  high_risk: false,
  bump: false,
});

export default GlobalContext;
