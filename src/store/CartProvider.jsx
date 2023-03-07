import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalItemsAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
    const priceNum = +action.item.price;
    const updatedTotalAmount = state.totalAmount + priceNum;
    const updatedTotalItemsAmount = state.totalItemsAmount + 1;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsAmount: updatedTotalItemsAmount,
    };
  }

  if (action.type === "INCREASE") {
    const indexOfItem = state.items.findIndex((item) => item.id === action.id);
    const currentItem = state.items[indexOfItem];
    const currentItemAmount = +currentItem.amount;
    const updatedItemAmount = currentItemAmount + 1;
    const updatedItem = {
      id: currentItem.id,
      name: currentItem.name,
      price: currentItem.price,
      amount: updatedItemAmount,
      image: currentItem.image,
    };
    const updatedItems = state.items;
    updatedItems[indexOfItem] = updatedItem;
    const priceNum = +state.items[indexOfItem].price;
    const totalAmount = state.totalAmount + priceNum;
    const updatedTotalItemsAmount = state.totalItemsAmount + 1;
    return {
      items: updatedItems,
      totalAmount: totalAmount,
      totalItemsAmount: updatedTotalItemsAmount,
    };
  }

  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const currentItem = state.items[itemIndex];

    let updatedItems, updatedTotalAmount;
    updatedItems = state.items.filter((item) => item.id !== action.id);
    updatedTotalAmount = state.totalAmount - currentItem.price;
    const updatedTotalItemsAmount = state.totalItemsAmount - 1;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsAmount: updatedTotalItemsAmount,
    };
  }

  if (action.type === "DECREASE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const currentItem = state.items[itemIndex];

    let updatedItems, updatedTotalAmount;
    const updatedItem = {
      ...currentItem,
      amount: currentItem.amount - 1,
    };
    updatedItems = state.items;
    updatedItems[itemIndex] = updatedItem;
    updatedTotalAmount = state.totalAmount - currentItem.price;
    const updatedTotalItemsAmount = state.totalItemsAmount - 1;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsAmount: updatedTotalItemsAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCart = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const increaseAmount = (id) => {
    dispatchCartAction({ type: "INCREASE", id: id });
  };

  const decreaseAmount = (id) => {
    dispatchCartAction({ type: "DECREASE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem,
    increaseAmount,
    decreaseAmount,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
