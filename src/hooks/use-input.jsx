import React, { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
    };
  }

  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }

  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }

  return inputStateReducer;
};

const useInput = (conditionFunction) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = conditionFunction(inputState.value);

  const changeInputHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurInputHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const hasError = inputState.isTouched && !enteredValueIsValid;

  const inputClassName = hasError ? "input-control invalid" : "input-control";

  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    changeInputHandler,
    blurInputHandler,
    inputClassName,
    reset,
  };
};

export default useInput;
