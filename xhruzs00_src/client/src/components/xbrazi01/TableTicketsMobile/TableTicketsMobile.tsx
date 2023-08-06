// Author: Tomas Brazina (xbrazi01)
import { FC } from "react";
import styles from "./TableTicketsMobile.module.css";
import { useState } from "react";

import data_sms from "./Table_ticket_sms.json";
import data_DPMB from "./Table_ticket_DPMB.json";
import data_SEJF from "./Table_ticket_SEJF.json";
import data_KAPSY from "./Table_ticket_KAPSY.json";

export const JizdenkyMobil: FC = () => {
  return (
    <div className={styles["container"]}>
      <Sms_ticket />
      <DPMB_ticket />
      <SEJF_ticket />
      <KAPSY_ticket />
    </div>
  );
};

const Sms_ticket: FC = () => {
  const [table_data, setData] = useState(data_sms);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> SMS jízdenky </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Zóny</th>
            <th>Cena</th>
            <th>Platnost</th>
            <th>Tvar SMS</th>
            <th>Telefonní číslo</th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((data) => (
            <tr>
              <td>{data["Zóny"]}</td>
              <td>{data["Cena"]}</td>
              <td>{data["Platnost"]}</td>
              <td>{data["Tvar SMS"]}</td>
              <td>{data["Telefonní číslo"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DPMB_ticket: FC = () => {
  const [table_data, setData] = useState(data_DPMB);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Aplikace DPMBinfo </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Pro zóny</th>
            <th>Cena</th>
            <th>Platnost</th>
            <th>Způsob platby</th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((data) => (
            <tr>
              <td>{data["Pro zóny"]}</td>
              <td>{data["Cena"]}</td>
              <td>{data["Platnost"]}</td>
              <td>{data["Způsob platby"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SEJF_ticket: FC = () => {
  const [table_data, setData] = useState(data_SEJF);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Aplikace SEJF </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Zóny</th>
            <th>Cena</th>
            <th>Platnost</th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((data) => (
            <tr>
              <td>{data["Zóny"]}</td>
              <td>{data["Cena"]}</td>
              <td>{data["Platnost"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const KAPSY_ticket: FC = () => {
  const [table_data, setData] = useState(data_KAPSY);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Aplikace Do kapsy </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Zóny</th>
            <th>Cena</th>
            <th>Platnost</th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((data) => (
            <tr>
              <td>{data["Zóny"]}</td>
              <td>{data["Cena"]}</td>
              <td>{data["Platnost"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
