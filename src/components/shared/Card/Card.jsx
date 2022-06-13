import React from "react";
import style from "../Card/Card.module.css";

const Card = ({ title, icon, children }) => {
  return (
    <div className={style.card}>
      <div className={style.headingwrapper}>
        <img src={`/images/${icon}.png`} alt="logo" />
        <h1 className={style.heading}>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
