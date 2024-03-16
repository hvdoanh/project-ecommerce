import React from "react";
import logoHome from "../../assets/images/logoH.svg";
import "../../styles/home/header.css";
import { LuSearch } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="toggle_header">
        <FaBars className="menu_toggle" />
        <LuSearch className="search-toggle" />
      </div>

      <div className="logo_header">
        <img src={logoHome} alt="logoHeader" />
      </div>

      <div className="menu_header">
        <ul className="nav-sub">
          <li className="nav-sub-item">
            <a href="#">Sale</a>
          </li>
          <li className="nav-sub-item">
            <a href="#">Sản phẩm</a>
          </li>
          <li className="nav-sub-item">
            <a href="#">Đồ lót</a>
          </li>
          <li className="nav-sub-item">
            <a href="#">Đồ thể thao</a>
          </li>
          <li className="nav-sub-item">
            <a href="#">Mặc hằng ngày</a>
          </li>
          <li className="nav-sub-item">
            <a href="#">Nước hoa</a>
          </li>
          <li className="nav-sub-item">
            <a href="#">Sản xuất riêng</a>
          </li>
          <li className="nav-sub-item">
            <a href="#">Care&Share</a>
          </li>
        </ul>
      </div>

      <div className="header_inner">
        <div className="search-input">
          <LuSearch />
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        </div>
        <div className="icon_user">
          <Link to="/register">
            <FaUser />
          </Link>
        </div>
        <div className="icon_shopping">
          <Link>
            <FaShoppingBag />
          </Link>
          <span className="count-shopping">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
