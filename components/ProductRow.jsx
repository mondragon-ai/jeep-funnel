const ProductRow = ({ name, price, piece, productId }) => (
  <div className="productrow">
    <div className="checkbox">
      <input
        disabled
        type="checkbox"
        name={JSON.stringify({ name, price, piece, product_id: productId })}
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
  </div>
);

export default ProductRow;
