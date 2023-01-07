import { Field, useFormikContext, ErrorMessage } from "formik";

const ProductRow = ({ name, price, piece, productId, data, id }) => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <div id={id ? "BEST_DEAL" : ""} className="productrow">
      <div className="checkbox">
        <Field
          type="checkbox"
          name="product"
          checked={values.product === data}
          onChange={(e) => {
            setFieldValue("product", data);
          }}
          id={productId}
        />
      </div>
      <div className="div-block-90">
        <div className="div-block-92">
          <div className="productrowtitle">{name}</div>
          <div className="productrowsubheader">{piece}</div>
        </div>
      </div>
      <div className="div-block-91">
        <div className="productrowsubheader">{price}</div>
      </div>
      <ErrorMessage name="address" component="div" />
    </div>
  );
};

export default ProductRow;
