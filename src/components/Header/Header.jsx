import React from "react";

import Navigation from "./Navigation.jsx";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <section className={classes.hero}>
      <Navigation onOpenCart={props.onOpenCart} />

      <div className={classes.heading}>
        <h1>Відкрий для себе чарівний світ літератури</h1>
      </div>
    </section>
  );
};

export default Header;
