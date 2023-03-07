import React from "react";

import classes from "./Pagination.module.css";

const Pagination = ({ amountOfPages, currentPage, onClick }) => {
  let buttons = [];
  if (amountOfPages > 6) {
    for (let i = 0; i < 3; i++) {
      buttons.push(
        <button
          key={i}
          className={`${classes["pagination-btn"]} ${
            i + 1 === currentPage ? classes.active : ""
          }`}
          onClick={onClick}
        >
          {i + 1}
        </button>
      );
    }
    buttons.push(
      <button key={"..."} onClick={onClick}>
        ...
      </button>
    );
    buttons.push(
      <button
        key={amountOfPages}
        className={`${classes["pagination-btn"]} ${
          amountOfPages === currentPage ? classes.active : ""
        }`}
        onClick={onClick}
      >
        {amountOfPages}
      </button>
    );
  } else
    for (let i = 0; i < amountOfPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`${classes["pagination-btn"]} ${
            i + 1 === currentPage ? classes.active : ""
          }`}
          onClick={onClick}
        >
          {i + 1}
        </button>
      );
    }

  return (
    <div className={classes.pagination}>
      {buttons.map((button, i) => button)}
    </div>
  );
};

export default Pagination;
