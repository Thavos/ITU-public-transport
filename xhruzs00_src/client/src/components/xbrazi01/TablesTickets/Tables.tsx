// Author: Tomas Brazina (xbrazi01)
import { FC } from "react";
import styles from "./Tables.module.css";
import { useState } from "react";
import data from "./Tables_month.json";
import data4 from "./Tables_month_4.json";
import data_year from "./Tables_year.json";
import data_tranfarable from "./Tables_transfarable.json";

export const Jizdne: FC = () => {
  return (
    <div className={styles["container"]}>
      <Month />
      <a href="/tickets/buy" className={styles["buy_block"]}>
        Koupit
      </a>
      <Month_4 />
      <a href="/tickets/buy" className={styles["buy_block"]}>
        Koupit
      </a>
      <Year />
      <a href="/tickets/buy" className={styles["buy_block"]}>
        Koupit
      </a>
      <Transfarable />
      <a href="/tickets/buy" className={styles["buy_block"]}>
        Koupit
      </a>
    </div>
  );
};

const Month: FC = () => {
  const [mesacna, setData] = useState(data);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Měsíční šalinkarta </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Platí pro zóny</th>
            <th>Základní cena</th>
            <th>Snížená cena I.</th>
            <th>Snížená cena II.</th>
          </tr>
        </thead>
        <tbody>
          {mesacna.map((data_month) => (
            <tr>
              <td>{data_month["Platí pro zóny"]}</td>
              <td>{data_month["Základní cena"]}</td>
              <td>{data_month["Snížená cena I."]}</td>
              <td>{data_month["Snížená cena II."]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Month_4: FC = () => {
  const [mesacna_4, setData] = useState(data_year);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Čtvrtletní šalinkarta </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Platí pro zóny</th>
            <th>Základní cena</th>
            <th>Snížená cena I.</th>
            <th>Snížená cena II.</th>
            {/* <th>Koupit</th> */}
          </tr>
        </thead>
        <tbody>
          {mesacna_4.map((data_mesacna) => (
            <tr>
              <td>{data_mesacna["Platí pro zóny"]}</td>
              <td>{data_mesacna["Základní cena"]}</td>
              <td>{data_mesacna["Snížená cena I."]}</td>
              <td>{data_mesacna["Snížená cena II."]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Year: FC = () => {
  const [Year, setData] = useState(data4);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Roční šalinkarta </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Platí pro zóny</th>
            <th>Základní cena</th>
            <th>Snížená cena I.</th>
            <th>Snížená cena II.</th>
            {/* <th>Koupit</th> */}
          </tr>
        </thead>
        <tbody>
          {Year.map((data_mesacna) => (
            <tr>
              <td>{data_mesacna["Platí pro zóny"]}</td>
              <td>{data_mesacna["Základní cena"]}</td>
              <td>{data_mesacna["Snížená cena I."]}</td>
              <td>{data_mesacna["Snížená cena II."]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Transfarable: FC = () => {
  const [Transfarable, setData] = useState(data_tranfarable);

  return (
    <div className={styles["container"]}>
      <p className={styles["label"]}> Přenosné předplatní jízdenky </p>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Jízdenka</th>
            <th>Platí pro zóny</th>
            <th>Základní cena</th>
            <th>Snížená cena</th>
            {/* <th>Koupit</th> */}
          </tr>
        </thead>
        <tbody>
          {Transfarable.map((Transfarable) => (
            <tr>
              <td>{Transfarable["Jízdenka"]}</td>
              <td>{Transfarable["Platí pro zóny"]}</td>
              <td>{Transfarable["Základní cena"]}</td>
              <td>{Transfarable["Snížená cena"]}</td>
              {/* <a className={styles["buy_block"]} href="/tickets/buy"></a> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
