import React, { useState } from "react";
import Input from "./../../UI/Input/Input";
import Select from "./../../UI/Select/Select";
import filterIcon from "./../../icons/filter.svg";

import classes from "./FilterAndSearch.module.css";

const FilterAndSearch = ({ filter, setFilter }) => {
  const [sortIsIcon, setSortIsIcon] = useState(true);

  const booksFilterHandler = (event) => {
    setFilter({ ...filter, query: event.target.value });
  };

  const changeSortHandler = (event) => {
    setFilter({ ...filter, sort: event });
  };

  return (
    <div
      className={`${classes.container} ${
        sortIsIcon ? "" : classes["with-selector"]
      }`}
    >
      {!sortIsIcon && (
        <Select
          value={filter.sort}
          onChange={changeSortHandler}
          // onClick={() => setSortIsIcon(true)}
          options={[
            { value: "default", name: "Сортувати за" },
            { value: "price", name: "Ціною" },
            { value: "bookName", name: "Назвою" },
          ]}
        />
      )}
      {sortIsIcon && (
        <img
          alt="filter icon"
          src={filterIcon}
          onClick={() => setSortIsIcon(false)}
        />
      )}
      <Input
        text="Введіть назву книги"
        onChange={booksFilterHandler}
        value={filter.query}
        className={classes.input}
      />
    </div>
  );
};

export default FilterAndSearch;
