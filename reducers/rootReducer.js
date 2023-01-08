import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "rootReducer",
  initialState: {
    customer: {
      isPending: false,
      error: null,
      id: "",
      first_name: "",
      email: "",
      STRIPE_CLIENT_ID: "",
      STRIPE_UUID: "",
    },
    product: {},
    shipping: {},
    bump: false,
    highrisk: false,
    funnel_uuid: "fun_7626c00357",
    isPending: false,
    message: "",
  },
  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },
    setBump: (state, action) => {
      state.bump = action.payload;
    },
    setHighRisk: (state, action) => {
      state.highrisk = action.payload;
    },
    setFunnelUUID: (state, action) => {
      state.funnel_uuid = action.payload;
    },
    setIsPending: (state, action) => {
      state.isPending = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  setCustomer,
  setProduct,
  setShipping,
  setBump,
  setHighRisk,
  setFunnelUUID,
  setIsPending,
  setMessage,
} = rootSlice.actions;

export default rootSlice.reducer;


// You can use these CC credentials 


// Number: 4242-4242-4242-4242
// CVC
// 123
// MM/YY
// 12/34
// 72704