import React, { useState, useMemo } from "react";
import FilterAndSearch from "./FilterAndSearch";
import BookList from "./BooksList";
import books from "../../Data/BooksData";

const FilteredList = () => {
  const [filter, setFilter] = useState({ sort: "default", query: "" });

  const sortedBooks = useMemo(() => {
    if (filter.sort === "default") return books;

    if (filter.sort) {
      return [...books].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else return books;
  }, [filter.sort, books]);

  const filteredAndSortedBooks = useMemo(() => {
    return sortedBooks.filter((book) => {
      return (
        book.bookName.toLowerCase().includes(filter.query.toLowerCase()) ||
        book.author.toLowerCase().includes(filter.query.toLowerCase())
      );
    });
  }, [filter.query, books, filter.sort]);

  return (
    <div>
      <FilterAndSearch filter={filter} setFilter={setFilter} />
      <BookList bookArray={filteredAndSortedBooks} />
      {filteredAndSortedBooks.length === 0 ? (
        <div className="empty-book-list">Упс... Такої книги немає</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilteredList;
