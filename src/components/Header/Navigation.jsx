import React, { useState, useContext } from "react";

import logo from "./../../img/logo.svg";
import cartIcon from "./../../icons/shopping-cart.svg";
import phoneIcon from "./../../icons/phone.svg";
import CartContext from "../../store/cart-context";

import classes from "./Navigation.module.css";

const Header = (props) => {
  const [isFixed, setIsFixed] = useState(false);
  const cartCtx = useContext(CartContext);

  function navFixed() {
    if (window.scrollY >= 660) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  window.addEventListener("scroll", navFixed);

  return (
    <nav
      className={`${classes.navigation} ${
        isFixed && classes["navigation-fixed"]
      }`}
      id="navigation"
    >
      <div className={classes.logo}>
        <img alt="logo" className={classes["logo-icon"]} src={logo} />
        <span>
          BOOK <span className={classes.orange}>UKR</span>
        </span>
      </div>

      <div className={classes.info}>
        <div>
          <img className={classes.icon} alt="phone icon" src={phoneIcon} />
          <span>+380 (12) 345 6789</span>
        </div>

        <div onClick={props.onOpenCart}>
          <img className={classes.icon} alt="cart icon" src={cartIcon} />
          <span>Кошик</span>
          <div className={classes.amount}>{cartCtx.items.length}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
