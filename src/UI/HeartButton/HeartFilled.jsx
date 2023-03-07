import heart from "./../../icons/heart-filled.svg";

const HeartFilled = (props) => {
  return (
    <img
      className={props.className}
      style={props.style}
      src={heart}
      onClick={props.onClick}
    />
  );
};

export default HeartFilled;
