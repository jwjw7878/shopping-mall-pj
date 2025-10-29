import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";

const Header = ({ auth, setAuth }) => {
  const [mobile, setMobile] = useState(false);
  const logoutHandler = () => {
    setAuth(false);
  };
  const navigate = useNavigate();
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
  const [search, setSearch] = useState("");
  const sendSearch = () => {
    navigate(`/?q=${search}`);
  };
  const onKeyHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendSearch();
    }
  };
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
          <input
            type="text"
            placeholder="상품명을 입력해주세요"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={onKeyHandler}
          />
          <FaSearch className="search-icon" onClick={sendSearch} />
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
        <IoIosMenu
          className="menu-icon"
          onClick={() => {
            setMobile(true);
          }}
        />
        <MobileNavbar
          menuList={menuList}
          search={search}
          setSearch={setSearch}
          setMobile={setMobile}
          mobile={mobile}
        />
      </div>
      <nav className="pc-nav">
        <ul className="pc-ul">
          {menuList.map((menu, idx) => (
            <li className="pc-li" key={idx}>
              {menu}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
