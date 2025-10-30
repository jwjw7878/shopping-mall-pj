import React, { useContext } from "react";
import { LikeContext } from "./LikeContext";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Like = () => {
  const { state, dispatch } = useContext(LikeContext);
  return (
    <div className="like-page">
      <h1>좋아요한 상품 목록</h1>
      {state.like.length > 0 ? (
        <>
          <ul>
            {state.like.map((likeProduct) => (
              <li key={likeProduct.id}>
                <img src={likeProduct.img} alt="product-img" />
                <Link to={`product/${likeProduct.id}`}>
                  <p>{likeProduct.title}</p>
                </Link>
                <p>
                  <IoMdClose
                    className="like-remove"
                    onClick={() => {
                      dispatch({ type: "toggle", payload: likeProduct });
                    }}
                  />
                </p>
              </li>
            ))}
          </ul>
          <button
            className="remove-all-btn"
            onClick={() => {
              dispatch({ type: "removeAll" });
            }}
          >
            모두 비우기
          </button>
        </>
      ) : (
        <p className="no-product-text">해당 상품이 없습니다.</p>
      )}
    </div>
  );
};

export default Like;
