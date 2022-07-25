import styles from "./transfer.module.css";
import CardOperation from "../UI/CardOperation";

export interface IAppProps {}

const Transfer = (props: IAppProps) => {
  const title = "Transfer Money";
  return (
    <CardOperation title={title} colorProp={"green"}>
      <input type="text" />
      <input type="number" />
      <button>Send</button>
      <label>Transfer to</label>
      <label>Amount</label>
    </CardOperation>
  );
};

export default Transfer;
