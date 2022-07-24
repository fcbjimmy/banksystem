import { FC } from "react";
import style from "./table.module.css";
import Transfer from "./Transfer";

interface Props {
  data: { name: string; date: string; value: number; type: string }[];
}

const Table: FC<Props> = ({ data }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <tbody className={style.tBody}>
              {data.map((item, index) => (
                <tr className={style.list} key={index}>
                  <td className={style.tdName}>{item.name}</td>
                  <td className={style.tdDate}>{item.date}</td>
                  <td className={style.tdValue}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Transfer />
      </div>
    </>
  );
};

export default Table;
