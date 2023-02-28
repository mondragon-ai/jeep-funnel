import { Field, useFormikContext, ErrorMessage } from "formik";
import { useState } from "react";

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
      }} className="productrow" style={{cursor: "pointer"}}>
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
          <div className="productrowtitle">{options1}</div>
          <div className="productrowsubheader">{piece}</div>
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
