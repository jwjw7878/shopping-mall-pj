import React, { useContext } from "react";
import NotFound from "./NotFound";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Scroll from "./Scroll";
import { LikeContext } from "./LikeContext";

const Products = () => {
  const { state, dispatch } = useContext(LikeContext);
  console.log(state);
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
            <div key={product.id} className="item">
              <Link to={`/product/${product.id}`}>
                {product.new ? <p className="new-item">new</p> : ""}
                <img src={product.img} alt="product-img" />
                <p className="choice">
                  {product.choice ? "concious choice" : ""}
                </p>
                <p className="title">{product.title}</p>
                <p className="price">₩{product.price.toLocaleString()}</p>
              </Link>
              {state.like.find((item) => item.id === product.id) ? (
                <FaHeart
                  className="products-like-icon active"
                  onClick={() => dispatch({ type: "toggle", payload: product })}
                />
              ) : (
                <FaRegHeart
                  className="products-like-icon"
                  onClick={() => dispatch({ type: "toggle", payload: product })}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
      <Scroll />
    </div>
  );
};

export default Products;
