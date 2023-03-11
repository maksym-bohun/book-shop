import React, { useState, useEffect } from "react";
import BookCard from "./../BookCard/BookCard";
import Pagination from "./Pagination";
import classes from "./BooksList.module.css";

const BookList = ({ bookArray }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(12);

  const lastBook = currentPage * booksPerPage;
  const firstBook = lastBook - booksPerPage;
  const amountOfPages = Math.ceil(bookArray.length / booksPerPage);

  const sliceBooks = (array) => {
    return array.slice(firstBook, lastBook);
  };

  const changePageHandler = (e) => {
    setCurrentPage(+e.target.textContent);
    window.scrollTo(0, 1096);
  };

  const key = bookArray.length;

  return (
    <div>
      <div books={bookArray} className={classes.list}>
        {sliceBooks(bookArray).map((book, i) => (
          <BookCard book={book} key={key - book.id} />
        ))}
      </div>
      <Pagination
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        onClick={changePageHandler}
      />
    </div>
  );
};
// currentPage !== 1 &&

export default BookList;
