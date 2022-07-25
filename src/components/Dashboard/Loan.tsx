import CardOperation from "../UI/CardOperation";

export interface IAppProps {}

function Loan(props: IAppProps) {
  const title = "Loan";
  return (
    <CardOperation title={title} colorProp={"blue"}>
      <input type="text" />
      <input type="number" />
      <button>Request</button>
      <label>Test</label>
      <label>Amount</label>
    </CardOperation>
  );
}

export default Loan;
