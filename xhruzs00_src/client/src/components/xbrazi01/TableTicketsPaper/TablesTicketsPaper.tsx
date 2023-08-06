// Author: Tomas Brazina (xbrazi01)
import { FC } from "react";
import styles from "./TablesTicketsPaper.module.css";
import { useState } from "react";
import data from "./Tables_ticket.json";
import aut from "./Tables_ticket_aut.json";

export const PapiroveJizdenky: FC = () => {
  return (
    <div className={styles["container"]}>
      <Tickets_paper />
      <Tickets_paper_aut />
    </div>
  );
};

const Tickets_paper: FC = () => {
  const [table_data, setData] = useState(data);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Přehled jízdenek </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Počet zón</th>
            <th>Platnost</th>
            <th>Základní</th>
            <th>Zlevněná A*</th>
            {/* <th>Koupit</th> */}
          </tr>
        </thead>
        <tbody>
          {table_data.map((data) => (
            <tr>
              <td>{data["Počet zón"]}</td>
              <td>{data["Platnost"]}</td>
              <td>{data["Základní"]}</td>
              <td>{data["Zlevněná A*"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Tickets_paper_aut: FC = () => {
  const [table_data_aut, setData] = useState(aut);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Jízdenky z jízdenkových automatů </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Počet zón</th>
            <th>Platnost</th>
            <th>Základní</th>
            <th>Zlevněná A*</th>
            {/* <th>Koupit</th> */}
          </tr>
        </thead>
        <tbody>
          {table_data_aut.map((data_aut) => (
            <tr>
              <td>{data_aut["Počet zón"]}</td>
              <td>{data_aut["Platnost"]}</td>
              <td>{data_aut["Základní"]}</td>
              <td>{data_aut["Zlevněná A*"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
