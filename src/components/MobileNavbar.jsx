import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const MobileNavbar = ({ menuList, setMobile, mobile }) => {
  return (
    <nav className={`mobile-nav ${mobile ? "active" : ""}`}>
      <IoMdClose
        className="close-icon"
        onClick={() => {
          setMobile(false);
        }}
      />
      <div className="mobile-search">
        <input
          type="text"
          className="mobile-input"
          placeholder="상품명을 입력해주세요"
        />
        <FaSearch className="mobile-search-icon" />
      </div>
      <ul className="mobile-ul">
        {menuList.map((menu, i) => (
          <li className="mobile-li" key={i}>
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
