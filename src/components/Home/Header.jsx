import React, { useEffect, useState } from "react";
import logoHome from "../../assets/images/logoH.svg";
import { LuSearch } from "react-icons/lu";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../../styles/home/header.css";
import { CiLogout } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const dataRegister = JSON.parse(localStorage.getItem("dataRegister"));
  const [showDropDown, setshowDropDown] = useState(true);

  useEffect(() => {
    setUserName(dataRegister?.name);
  }, []);

  const handleDropDown = () => {
    setshowDropDown(!showDropDown);
  };

  const handleLogOut = () => {
    localStorage.removeItem("dataRegister");
    navigate("/register");
  };

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
            <Link href="#">Sale</Link>
          </li>
          <li className="nav-sub-item">
            <Link href="#">Sản phẩm</Link>
          </li>
          <li className="nav-sub-item">
            <Link href="#">Đồ lót</Link>
          </li>
          <li className="nav-sub-item">
            <Link href="#">Đồ thể thao</Link>
          </li>
          <li className="nav-sub-item">
            <Link href="#">Mặc hằng ngày</Link>
          </li>
          <li className="nav-sub-item">
            <Link href="#">Nước hoa</Link>
          </li>
          <li className="nav-sub-item">
            <Link href="#">Sản xuất riêng</Link>
          </li>
          <li className="nav-sub-item">
            <Link href="#">Care&Share</Link>
          </li>
        </ul>
      </div>

      <div className="header_inner">
        <div className="search-input">
          <LuSearch />
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        </div>

        {userName === "" || userName == null ? (
          <div className="icon_user">
            <Link to="/register">
              <FaUser />
            </Link>
          </div>
        ) : (
          <div className="user-name">
            {userName}

            {showDropDown ? (
              <div className="right" onClick={handleDropDown}>
                <FaAngleDown />
              </div>
            ) : (
              <div className="left" onClick={handleDropDown}>
                <FaAngleUp />
              </div>
            )}

            {showDropDown ? (
              ""
            ) : (
              <div className="logout">
                <div className="item_logout" onClick={handleLogOut}>
                  <button>Log out</button>
                  <CiLogout />
                </div>
                <div className="icon_shopping">
                  <p className="cart_title">Cart</p>
                  <Link className="cart_img">
                    <FaShoppingBag />
                  </Link>
                  <span className="count-shopping">0</span>
                </div>
              </div>
            )}
          </div>
        )}

        {userName === "" || userName == null ? (
          <div className="icon_shopping">
            <Link>
              <FaShoppingBag />
            </Link>
            <span className="count-shopping">0</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
