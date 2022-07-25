import styles from "./cardOperation.module.css";

const CardOperation = ({ children, title, colorProp }) => {
  const color = colorProp;
  let container = "";
  switch (color) {
    case "green":
      container = "container";
      break;
    case "blue":
      container = "containerBlue";
      break;
    default:
      container = "container";
  }

  return (
    <div className={styles[container]}>
      <h2>{title}</h2>
      <form className={styles.form}>{children}</form>
    </div>
  );
};

export default CardOperation;
