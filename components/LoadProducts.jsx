const LoadProducts = ({ products }) => {
  return (
    <div className="div-block-116">
      <div className="div-block-50">
        <p className="paragraph-29">Product</p>
        <p className="paragraph-30">Price</p>
      </div>
      <div id="PURCHASED" style={{ marginTop: "1rem" }}>
        {products?.map((product, i) => (
          <div
            id="PoductRowFirst"
            className="productrow"
            key={i}
            style={{ height: "auto" }}
          >
            <div className="div-block-90">
              <div className="div-block-92">
                <div className="productrowtitle">{product.title}</div>
                <div className="productrowsubheader">{product.piece}</div>
              </div>
            </div>
            <div className="div-block-91" style={{ top: "auto" }}>
              <div
                className="productrowsubheader final-product"
                style={{ left: "auto" }}
              >
                {product.price_str?.replace(/\s/g, "") || numberFormat(Number(product.price_num)/100)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const numberFormat = (num) =>{
  // return new Intl.NumberFormat('en-IN', {
  //     style: 'currency',
  //     currency: 'USD'
  // }).format(value);
  if (num < 1000) {
      return "$" + num.toFixed(2);
  } else if (num >= 1000 && num < 1000000) {
      return "$" + (num/1000).toFixed(1) + "k";
  } else if (num >= 1000000 && num < 1000000000) {
      return "$" + (num/1000000).toFixed(1) + "M";
  } else {
      return "$" + (num/1000000000).toFixed(1) + "B";
  }
}


export default LoadProducts;
