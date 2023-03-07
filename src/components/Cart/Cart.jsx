import React, { useState, useContext, useEffect } from "react";
import Modal from "../../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CartForm from "./CartForm";
import Loader from "../../UI/Loader/Loader";

import closeIcon from "./../../icons/close-icon.svg";
import smileIcon from "./../../icons/smiley.svg";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [formIsOpened, setFormIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (cartCtx.items.length === 0) setCartIsEmpty(true);
    else setCartIsEmpty(false);
  }, [cartCtx]);

  const notEmptyCart = (
    <ul className={classes.list}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            name={item.name}
            key={item.id}
            id={item.id}
            image={item.image}
            price={item.price}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );

  const emptyCart = (
    <h1 className={classes["error-message"]}>Кошик порожній!</h1>
  );

  const openFormHandler = () => {
    setFormIsOpened(true);
  };

  const returnToCartHandler = () => {
    setFormIsOpened(false);
  };

  const getUserDataHandler = async (userData) => {
    setIsLoading(true);
    await fetch(
      "https://book-shop-352ae-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setDataFetched(true);
    setIsLoading(false);
    cartCtx.clearCart();
    document.location.reload();
    // props.setCartIsVisible(false);
  };

  return (
    <Modal onClose={props.onCloseCart}>
      {!formIsOpened && !isLoading && !dataFetched && (
        <div className={classes.block}>
          <div className={classes["close-icon"]} onClick={props.onCloseCart}>
            <img src={closeIcon} />
          </div>
          <div className={classes.header}>Кошик</div>
          {cartIsEmpty && emptyCart}
          {!cartIsEmpty && notEmptyCart}
          <div>
            {!cartIsEmpty && (
              <div className={classes["actions-wrapper"]}>
                <span>Всього</span>
                <div className={classes.actions}>
                  <div className={classes["total-price"]}>
                    {cartCtx.totalAmount}₴
                  </div>
                  <button
                    className={classes["order-btn"]}
                    onClick={openFormHandler}
                  >
                    Замовити
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {formIsOpened && !isLoading && !dataFetched && (
        <CartForm
          onReturn={returnToCartHandler}
          setCartIsVisible={props.setCartIsVisible}
          onConfirm={getUserDataHandler}
        />
      )}

      {isLoading && !dataFetched && <Loader />}

      {dataFetched && (
        <div className={classes.feedback}>
          <div>Дякуємо за замовлення!</div>
          <img src={smileIcon} />
        </div>
      )}
    </Modal>
  );
};

export default Cart;
