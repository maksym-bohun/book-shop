import heart from "./../../icons/heart.svg";

const Heart = (props) => {
  return (
    <img
      className={props.className}
      style={props.style}
      src={heart}
      onClick={props.onClick}
    />
  );
};

export default Heart;
