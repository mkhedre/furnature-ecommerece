import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  GiSofa,
  GiCookingPot,
  GiClothes,
  GiClockwork,
  GiLightBulb,
  GiHand,
  GiCircuitry,
  GiCarWheel,
} from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { TbHorseToy } from "react-icons/tb";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isCategoryDropdownVisible, setCategoryDropdownVisible] =
    useState(false);
  const [isHomeDropdownVisible, setHomeDropdownVisible] = useState(false);

  return (
    <nav className="navbar">
      {/* Left - Categories */}
      <div
        className="navbar-left"
        onMouseEnter={() => setCategoryDropdownVisible(true)}
        onMouseLeave={() => setCategoryDropdownVisible(false)}
      >
        <div className="categories">
          <FaBars className="menu-icon" />
          <span>
            BROWSE CATEGORIES <IoIosArrowDown />
          </span>
        </div>
        {isCategoryDropdownVisible && (
          <div className="category-dropdown">
            <ul>
              <li>
                <GiSofa /> Furniture <IoIosArrowForward />
              </li>
              <li>
                <GiCookingPot /> Cooking <IoIosArrowForward />
              </li>
              <li>
                <MdOutlineCategory /> Accessories <IoIosArrowForward />
              </li>
              <li>
                <GiClothes /> Fashion <IoIosArrowForward />
              </li>
              <li>
                <GiClockwork /> Clocks <IoIosArrowForward />
              </li>
              <li>
                <GiLightBulb /> Lighting <IoIosArrowForward />
              </li>
              <li>
                <TbHorseToy /> Toys <IoIosArrowForward />
              </li>
              <li>
                <GiHand /> Hand Made <IoIosArrowForward />
              </li>
              <li>
                <MdOutlineCategory /> Minimalism <IoIosArrowForward />
              </li>
              <li>
                <GiCircuitry /> Electronics <IoIosArrowForward />
              </li>
              <li>
                <GiCarWheel /> Cars <IoIosArrowForward />
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Navbar List */}
      <ul className="navbar-list">
        <li
          className="dropdown-container dropdown-wrapper"
          onMouseEnter={() => setHomeDropdownVisible(true)}
          onMouseLeave={() => setHomeDropdownVisible(false)}
        >
          <a href="/">
            HOME <IoIosArrowDown />
          </a>
          {isHomeDropdownVisible && (
            <div className="home-dropdown">
              <div className="category">
                <img src="" alt="Furniture" />
                <h2>Furniture</h2>
              </div>
              <div className="category">
                <img src="" alt="Fashion" />
                <h2>Fashion</h2>
              </div>
              <div className="category">
                <img src="" alt="Toys" />
                <h2>Toys</h2>
              </div>
              <div className="category">
                <img src="" alt="Electronics" />
                <h2>Electronics</h2>
              </div>
              <button className="view-all-demos">VIEW ALL DEMOS (90)</button>
            </div>
          )}
        </li>
        <li>
          <a href="/shop">
            SHOP <IoIosArrowDown />
          </a>
        </li>
        <li>
          <a href="/blog">
            BLOG <IoIosArrowDown />
          </a>
        </li>
        <li>
          <a href="/pages">
            PAGES <IoIosArrowDown />
          </a>
        </li>
        <li>
          <a href="/elements">
            ELEMENTS <IoIosArrowDown />
          </a>
        </li>
        <li>
          <a href="/buy">
            BUY <IoIosArrowDown />
          </a>
        </li>
      </ul>

      {/* Right - Special Offers */}
      <div className="navbar-right">
        <a href="/special-offer" className="special-offer">
          SPECIAL OFFER
        </a>
        <span className="divider">|</span>
        <a href="/purchase-theme">PURCHASE THEME</a>
      </div>
    </nav>
  );
};

export default Navbar;
