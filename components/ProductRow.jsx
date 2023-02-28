import { Field, useFormikContext, ErrorMessage } from "formik";
import Image from "next/image";
import { useState } from "react";

import wb from "../public/images/wb.png"
import decal from "../public/images/decal.png"
import ts from "../public/images/ts.png"

const ProductRow = ({ title, price_str, price_num, piece, product_id, id, options1 }) => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <div id={id ? "BEST_DEAL" : ""} 
      onClick={(e) => {
        setFieldValue("product", {
          title,
          price_str,
          price_num,
          piece,
          product_id,
          options1
        });
      }} className="productrow" style={{
        cursor: "pointer",
        height: "70px",
        padding: "10px 0 0.5rem 0"
      }}>
      <div className="checkbox">
        <Field
          type="checkbox"
          name="product"
          checked={values.product?.product_id === product_id}
          onChange={(e) => {
            setFieldValue("product", {
              title,
              price_str,
              price_num,
              piece,
              product_id,
              options1
            });
          }}
          id={product_id}
        />
      </div>
      <div className="div-block-90">
        <div className="div-block-92">
          <div className="productrowtitle" style={{lineHeight: "12px", fontSize: "12px"}}>{title}</div>
          <div className="productrowsubheader" style={{lineHeight: "15px", fontSize: "15px", width: "100%"}}>
            <p style={{
              lineHeight: id !== "BEST_DEAL" ?  "10px" : "",
              fontSize: id !== "BEST_DEAL" ? "10px" : "",
              width: "100%",
              padding: "0 0 0.5rem 0"
            }}>{piece}</p>
          </div>
        </div>
      </div>
      <div className="div-block-91">
        <div className="productrowsubheader">{price_str?.replace(/\s/g, '')}</div>
      </div>
      <ErrorMessage name="address" component="div" />
    </div>
  );
};

export default ProductRow;
