const LoadProducts = ({ products }) => {
  return (
    <div className="div-block-116">
      <div className="div-block-50">
        <p className="paragraph-29">Product</p>
        <p className="paragraph-30">Price</p>
      </div>
      <div id="PURCHASED" style={{ marginTop: "1rem" }}>
        {products?.map((product, i) => (
          <div id="PoductRowFirst" className="productrow" key={i}>
            <div className="div-block-90">
              <div className="div-block-92">
                <div className="productrowtitle">{product.title}</div>
                <div className="productrowsubheader">{product.piece}</div>
              </div>
            </div>
            <div className="div-block-91">
              <div className="productrowsubheader">
                {product.price_str || product.price_num}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadProducts;
