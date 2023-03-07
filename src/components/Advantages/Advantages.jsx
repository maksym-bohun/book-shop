import React from "react";

import user1 from "./../../img/users-1.jpg";
import user2 from "./../../img/users-2.jpg";
import user3 from "./../../img/users-3.jpg";
import user4 from "./../../img/users-4.jpg";
import user5 from "./../../img/users-5.jpg";
import user6 from "./../../img/users-6.jpg";
import bagIcon from "./../../icons/bag.svg";
import rocketIcon from "./../../icons/rocket-launch.svg";
import checkIcon from "./../../icons/check.svg";
import smileIcon from "./../../icons/smiley.svg";

import classes from "./Advantages.module.css";

const Advantages = () => {
  return (
    <div className={classes["section-body"]}>
      <p className={classes.header}>Чому читачі обирають саме наш магазин?</p>
      <ul className={classes.list}>
        <li>
          <img src={bagIcon} className={classes.icon} />
          <span>Великий асортимент</span>
        </li>
        <li>
          <img src={smileIcon} className={classes.icon} />
          <span>Швидке і якісне обслуговування</span>
        </li>
        <li>
          <img src={rocketIcon} className={classes.icon} />
          <span>Відправка у день замовлення</span>
        </li>
        <li>
          <img src={checkIcon} className={classes.icon} />
          <span>Багаторічний досвід</span>
        </li>
      </ul>
      <div className={classes.deliveries}>
        <img className={classes.users} src={user1} alt="Portrait of man" />
        <img className={classes.users} src={user2} alt="Portrait of woman" />
        <img className={classes.users} src={user3} alt="Portrait of woman" />
        <img className={classes.users} src={user4} alt="Portrait of man" />
        <img className={classes.users} src={user5} alt="Portrait of woman" />
        <img className={classes.users} src={user6} alt="Portrait of man" />
        <p>
          Більше <span>1000</span> доставок по Україні
        </p>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default Advantages;
