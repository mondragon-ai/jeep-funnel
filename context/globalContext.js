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

  // bump: false,
  // clientSecret:
  //   "seti_1MOce4E1N4ioGCdRxQt27xyF_secret_N8uT3W6rwNpwQUQ0JnRgFLs0aBErNCD",
  // cus_uuid: "cus_f6ada27b34",
  // email: "ebusameric@gmail.com",
  // first_name: "samuel",
  // funnel_uuid: "fun_7626c00357",
  // high_risk: false,
  // products: [],
});

export default GlobalContext;
