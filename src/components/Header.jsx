import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

const Header = ({ auth, setAuth }) => {
  const logoutHandler = () => {
    setAuth(false);
  };
  const menuList = [
    "여성",
    "Devided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <header>
      <div className="header-section">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
            alt="logo"
            width={100}
          />
        </Link>
        <form>
          <input type="text" placeholder="상품명을 입력해주세요" />
          <FaSearch className="search-icon" />
        </form>
        <div className="auth">
          <FaHeart className="like-icon" />
          <FaCartShopping className="cart-icon" />
          {auth ? (
            <Link onClick={logoutHandler}>Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <IoIosMenu className="menu-icon" />
      </div>
      <nav>
        <ul>
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
