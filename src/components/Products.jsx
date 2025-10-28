import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsData = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/jwjw7878/shopping-mall-pj/products"
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    productsData();
  }, []);
  return (
    <div>
      <div className="products-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div key={product.id} className="item">
              {product.new ? <p className="new-item">new</p> : ""}
              <img src={product.img} alt="product-img" />
              <p className="choice">
                {product.choice ? "concious choice" : ""}
              </p>
              <p className="title">{product.title}</p>
              <p className="price">₩{product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
