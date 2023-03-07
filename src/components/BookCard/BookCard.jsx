import React, { useState, useContext, useEffect } from "react";

// import shoppingCart from "./../icons/shopping-cart-black.svg";
import classes from "./BookCard.module.css";
import Heart from "./../../UI/HeartButton/Heart";
import HeartFilled from "./../../UI/HeartButton/HeartFilled";
import Card from "./../../UI/Card/Card";
import CartContext from "./../../store/cart-context";

const BookCard = ({ book }) => {
  const [isInCart, setIsInCart] = useState(false);

  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);

  const addToCart = () => {
    cartCtx.addItem({
      id: book.id,
      name: book.bookName,
      price: book.price,
      image: book.image,
      amount: 1,
    });
  };

  const removeFromCart = () => {
    cartCtx.removeItem(book.id);
    setIsInCart(false);
  };

  const isSimilar = cartCtx.items.some((item) => item.id === book.id);

  useEffect(() => {
    if (isSimilar) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [addToCart, removeFromCart]);

  const bookName =
    book.bookName.length > 23
      ? book.bookName.slice(0, 23) + "..."
      : book.bookName;

  return (
    <Card className={classes.card}>
      <img src={book.image} className={classes.image} />
      <div className={classes.description}>
        <div className={classes["availability-block"]}>
          <div
            className={`${classes.availability} ${
              !book.availability ? classes["not-available"] : classes.available
            }`}
          ></div>
          {isInCart && (
            <HeartFilled className={classes.heart} onClick={removeFromCart} />
          )}
          {!isInCart && <Heart className={classes.heart} onClick={addToCart} />}
        </div>
        <div className={classes.name}>{bookName}</div>
        <div className={classes.author}>{book.author}</div>
        <div className={classes.price}>{book.price}&#8372;</div>
      </div>
    </Card>
  );
};

export default BookCard;
