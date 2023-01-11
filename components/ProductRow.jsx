import { Field, useFormikContext, ErrorMessage } from "formik";

const ProductRow = ({ title, price_str, price_num, piece, product_id, id }) => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <div id={id ? "BEST_DEAL" : ""} className="productrow">
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
            });
          }}
          id={product_id}
        />
      </div>
      <div className="div-block-90">
        <div className="div-block-92">
          <div className="productrowtitle">{title}</div>
          <div className="productrowsubheader">{piece}</div>
        </div>
      </div>
      <div className="div-block-91">
        <div className="productrowsubheader">{price_str}</div>
      </div>
      <ErrorMessage name="address" component="div" />
    </div>
  );
};

export default ProductRow;
