import React, { useRef, useState } from "react";
import AutoComplete from "./AutoComplete";
import classes from "./CartForm.module.css";

const isEmpty = (value) => value.trim().length === 0;

const CartForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    email: true,
    name: true,
    phoneNumber: true,
    post: true,
    city: true,
  });
  const [city, setCity] = useState("");

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const postInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPost = postInputRef.current.value;
    const enteredPhoneNumber = phoneInputRef.current.value;
    const enteredCity = city;

    console.log("city", enteredCity);

    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPostIsValid = !isEmpty(enteredPost);
    const enteredPhoneNumberIsValid = !isEmpty(enteredPhoneNumber);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      email: enteredEmailIsValid,
      name: enteredNameIsValid,
      street: enteredEmailIsValid,
      post: enteredPostIsValid,
      phoneNumber: enteredPhoneNumberIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPostIsValid &&
      enteredPhoneNumberIsValid &&
      enteredCityIsValid;

    if (!formIsValid) return;
    props.onConfirm({
      email: enteredEmail,
      name: enteredName,
      phoneNumber: "0" + enteredPhoneNumber,
      city: enteredCity,
      post: enteredPost,
    });
  };

  const getCityHandler = (city) => {
    setCity(city);
  };

  const emailControlClasses = `${classes["input-control"]} ${
    formInputsValidity.email || classes.invalid
  }`;
  const nameControlClasses = `${classes["input-control"]} ${
    formInputsValidity.name || classes.invalid
  }`;
  const postControlClasses = `${classes["input-control"]} ${
    formInputsValidity.post || classes.invalid
  }`;
  const cityControlClasses = `${classes["input-control"]} ${
    formInputsValidity.city || classes.invalid
  }`;

  const phoneControlClasses = `${classes["input-control"]} ${
    formInputsValidity.phoneNumber || classes["invalid-phone"]
  }`;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={emailControlClasses}>
        <input
          type="email"
          placeholder="E-mail"
          id="surname"
          ref={emailInputRef}
        />
      </div>

      <div className={nameControlClasses}>
        <input type="text" placeholder="Прізвище та ім'я" ref={nameInputRef} />
      </div>

      <div className={phoneControlClasses}>
        <div
          className={
            formInputsValidity.phoneNumber
              ? classes["phone-number"]
              : `${classes["invalid-input"]} ${classes["phone-number"]}`
          }
        >
          <span>+380</span>
          <input
            className={
              formInputsValidity.phoneNumber ? "" : classes["invalid-input"]
            }
            type="tel"
            placeholder="xx-xxx-xxxx"
            pattern="[0-9]{9}"
            ref={phoneInputRef}
          />
        </div>
      </div>

      <div className={cityControlClasses}>
        <AutoComplete
          type="text"
          id="city"
          placeholder="Місто"
          onGetCity={getCityHandler}
        />
      </div>

      <div className={postControlClasses}>
        <input
          type="text"
          id="post"
          placeholder="Поштове відділення"
          ref={postInputRef}
        />
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onReturn}>
          Назад
        </button>
        <button type="submit">Підтвердити</button>
      </div>
    </form>
  );
};

export default CartForm;
