import { Field, useFormikContext, ErrorMessage } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";

import wb from "../public/images/wb.png"
import decal from "../public/images/decal.png"
import ts from "../public/images/ts.png"

const ProductRow = ({ title, price_str, price_num, piece, product_id, id, options1 }) => {
  const { values, setFieldValue } = useFormikContext();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])


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
        padding: "10px 0 0.5rem 0",
        position: "relative",
        display: "flex",
        height: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: "0 0.5rem",
        }}>
      <div className=""  style={{
          position: "relative",
          display: "flex",
          height: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          paddingRight: "10px",
          width: "10%"
        }}>
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
      <div className="" style={{
          position: "relative",
          display: "flex",
          height: "auto",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "70%"
        }}>
        <div className=""  style={{
          position: "relative",
          display: "flex",
          height: "auto",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
          <div className="" style={{
            paddingTop: "0.5rem",
            lineHeight: windowWidth > 720 ? "25px" : "15px",
            fontSize: windowWidth > 720 ? "25px" : "15px",
            fontWeight:  600
          }}>
            <p>{title}</p>
          </div>
          <div className="" style={{lineHeight: "15px", fontSize: "15px", width: "100%"}}>
            <p style={{
              lineHeight:  windowWidth > 720 ?  "25px" : "15px",
              fontSize:  windowWidth > 720 ?  "25px" : "15px",
              width: "100%",
              padding: "0 0 0.5rem 0",
              fontWeight: id === "BEST_DEAL"  ? 500 : 300
            }}>{piece}</p>
          </div>
        </div>
      </div>
      <div className="" style={{
          display: "flex",
          height: "auto",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "20%",
          padding: "0.5rem 0",
          fontWeight: 300
        }}>
        <p className="">{price_str?.replace(/\s/g, '')}</p>
      </div>
      <ErrorMessage name="address" component="div" />
    </div>
  );
};

export default ProductRow;
