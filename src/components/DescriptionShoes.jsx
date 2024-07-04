import { useState } from "react";

function DescriptionShoes() {
  const [quantity, setQuantity] = useState(0);

  const handleClickMore = () => {
    setQuantity(quantity + 1);
  };

  const handleClickLess = () => {
    setQuantity(quantity - 1);
  };
  return (
    <>
      <section className="sectionRight">
        <p className="brand">SNEAKER COMPANY</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everyting the
          weather can offer.
        </p>
        <section className="reductionPrice">
          <p className="price">$125.00</p>
          <p className="reduction">50%</p>
        </section>
        <p className="oldPrice">$250.00</p>
        <section className="purchase">
          <div className="quantity">
            <button type="button" className="less" onClick={handleClickLess}>
              -
            </button>
            {quantity < 0 ? (
              <p className="numberOfQuantity">0</p>
            ) : (
              <p className="numberOfQuantity">{quantity}</p>
            )}
            <button type="button" className="more" onClick={handleClickMore}>
              +
            </button>
          </div>
          <button type="button" className="addToCart">
            🛒 Add to cart
          </button>
        </section>
      </section>
    </>
  );
}

export default DescriptionShoes;
