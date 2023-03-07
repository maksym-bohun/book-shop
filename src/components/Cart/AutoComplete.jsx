import { useState, useEffect } from "react";
import classes from "./AutoComplete.module.css";

const AutoComplete = (props) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [listClicked, setListClicked] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);

  const changeCityHandler = async () => {
    setShowSuggestions(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Medniy2000/ua_locations/master/json/ua_locations_10_11_2021.json"
    );
    console.log(response);
    const data = await response.json();
    setSuggestions(
      [...data].filter(
        (item) => item.type === "CITY" || item.type === "VILLAGE"
      )
    );
  };

  const chooseCityHandler = (e) => {
    setListClicked(true);
    setValue(e.target.textContent);
    console.log(e.target.textContent);
    props.onGetCity(e.target.textContent);
    setListClicked(false);
    blurHandler();
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
    setCitiesArray(
      suggestions.filter(
        (item) =>
          item.name.uk.toLowerCase().includes(e.target.value.toLowerCase()) &&
          (item.type === "CITY" || item.type === "VILLAGE")
      )
    );
  };

  const blurHandler = () => {
    setTimeout(() => {
      if (!listClicked) setShowSuggestions(false);
    }, 100);
  };

  return (
    <div className={classes.container}>
      <input
        ref={props.ref}
        value={value}
        onChange={changeHandler}
        onFocus={changeCityHandler}
        onBlur={blurHandler}
        placeholder={props.placeholder}
        type={props.type}
      />
      {showSuggestions && (
        <ul className={classes.suggestions}>
          {citiesArray.map((city) => {
            return (
              <li key={city.id} onClick={chooseCityHandler}>
                {city.name.uk}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
