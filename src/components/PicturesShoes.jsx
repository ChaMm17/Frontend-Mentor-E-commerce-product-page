import { useState } from "react";

function PicturesShoes() {
  const [pictureIndex, setPictureIndex] = useState(0);

  const picturesList = [
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/6ffb430c75684971bedcb5780812b39b/250d192186204b40af5a3dde6b8638fa.jpg?imwidth=1800&filter=packshot",
      imgAlt: "sneakers 1",
    },
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/9493dcbd4ba34f248970c71e23bdf411/31056d77f6334644a49e3328684b0bd0.jpg?imwidth=1800",
      imgAlt: "sneakers 2",
    },
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/d1af88562d56401badd0c6bbe1cdc82b/6ba23cbb61154a3997544bec8543a059.jpg?imwidth=1800",
      imgAlt: "sneakers 3",
    },
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/0c139df2194a402794d654ab29627455/bf96e816d9eb49748fe7491d5f597468.jpg?imwidth=1800",
      imgAlt: "sneakers 4",
    },
  ];

  const sneakers = picturesList[pictureIndex];

  const handleClickChange = () => {
    setPictureIndex(pictureIndex);
  };

  const handleClickNext = () => {
    setPictureIndex(pictureIndex + 1);
  };

  const handleClickPrevious = () => {
    setPictureIndex(pictureIndex - 1);
  };

  const newPrice = (a, b) => a * b;

  const [quantity, setQuantity] = useState(0);

  const handleClickMore = () => {
    setQuantity(quantity + 1);
  };

  const handleClickLess = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <section className="sectionLeft">
        <section className="bigPictureShoe">
          <figure>
            <img
              className="bigPicture"
              src={sneakers.imgSrc}
              alt="sneakers 1"
            />
          </figure>
        </section>
        <section className="littlePicturesShoes">
          <ul>
            <li>
              <img
                className="picture1"
                src="https://img01.ztat.net/article/spp-media-p1/6ffb430c75684971bedcb5780812b39b/250d192186204b40af5a3dde6b8638fa.jpg?imwidth=1800&filter=packshot"
                alt="sneakers 1"
              />
            </li>
            <li>
              <img
                className="picture2"
                src="https://img01.ztat.net/article/spp-media-p1/9493dcbd4ba34f248970c71e23bdf411/31056d77f6334644a49e3328684b0bd0.jpg?imwidth=1800"
                alt="sneakers 2"
              />
            </li>
            <li>
              <img
                className="picture3"
                src="https://img01.ztat.net/article/spp-media-p1/d1af88562d56401badd0c6bbe1cdc82b/6ba23cbb61154a3997544bec8543a059.jpg?imwidth=1800"
                alt="sneakers 3"
              />
            </li>
            <li>
              <img
                className="picture 4"
                src="https://img01.ztat.net/article/spp-media-p1/0c139df2194a402794d654ab29627455/bf96e816d9eb49748fe7491d5f597468.jpg?imwidth=1800"
                alt="sneakers 4"
              />
            </li>
          </ul>
        </section>
      </section>
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

export default PicturesShoes;
