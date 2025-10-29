import React from "react";
import NotFound from "./NotFound";
import { FaRegHeart } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const [query, setQuery] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsData = async () => {
    try {
      setLoading(true);
      let q = query.get("q") || "";
      const res = await fetch(
        `https://my-json-server.typicode.com/jwjw7878/shopping-mall-pj/products?q=${q}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    productsData();
  }, [query]);
  if (loading) return null;
  return (
    <div>
      {products.length > 0 ? (
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
                <FaRegHeart className="products-like-icon" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Products;
