import React, { useContext } from "react";

import classes from "./CartItem.module.css";
import plusIcon from "./../../icons/plus.svg";
import minusIcon from "./../../icons/minus.svg";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const increaseAmountHandler = () => {
    cartCtx.increaseAmount(props.id);
  };

  const decreaseAmountHandler = () => {
    if (props.amount === 1) {
      cartCtx.removeItem(props.id);
    } else cartCtx.decreaseAmount(props.id);
  };

  return (
    <li>
      <div className={classes.item}>
        <img className={classes.image} src={props.image} />
        <div className={classes["book-name"]}>{props.name}</div>
        <div className={classes["amount-changer"]}>
          <img src={minusIcon} onClick={decreaseAmountHandler} />
          <div>{props.amount}</div>
          <img src={plusIcon} onClick={increaseAmountHandler} />
        </div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className={classes.line}></div>
    </li>
  );
};

export default CartItem;
