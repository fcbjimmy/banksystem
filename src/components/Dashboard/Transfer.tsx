import styles from "./transfer.module.css";
import Input from "../UI/Input";

export interface IAppProps {}

const Transfer = (props: IAppProps) => {
  return (
    <div className={styles.container}>
      <h2>Transfer Money</h2>
      <form className={styles.form}> 
        <input type="text" />
        <input type="number" />
        <button></button>
        <label>Transfer to</label>
        <label>Amount</label>
      </form>
    </div>
  );
};

export default Transfer;
