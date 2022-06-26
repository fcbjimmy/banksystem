import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  const { children } = props;
  return <div className={style.container}>{children}</div>;
};

export default Card;
