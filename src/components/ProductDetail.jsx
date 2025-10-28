import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [size, setSize] = useState();
  const amount = Array.from({ length: 10 }, (_, i) => i + 1);

  const getDetailProduct = async () => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getDetailProduct();
  }, [id]);

  const sizeHandler = (e) => {
    setSize(e.target.dataset.id);
  };

  return (
    <div>
      <div className="detail-container">
        <div className="detail-img">
          <img src={product?.img} alt="product-img" />
          {product?.new && <p className="detail-new">new</p>}
        </div>
        <div className="detail-info">
          <p className="detail-title">{product?.title}</p>
          {product?.choice && <p className="detail-choice">concious choice</p>}
          <p className="detail-price">₩{product?.price.toLocaleString()}</p>
          <div className="size-container">
            {product?.size.map((el) => (
              <p
                className={size === el ? "detail-size active" : "detail-size"}
                data-id={el}
                onClick={sizeHandler}
              >
                {el}
              </p>
            ))}
          </div>
          <p className="detail-amount">수량</p>
          <select>
            {amount.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button className="detail-cart">
            <FaCartShopping className="cart-icon" /> Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
