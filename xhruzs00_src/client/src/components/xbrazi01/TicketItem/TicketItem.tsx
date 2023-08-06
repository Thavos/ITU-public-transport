// Author: Tomas Brazina (xbrazi01)
import { FC } from "react";
import { useState } from "react";

import { Fines } from "../Fines";
import { HowTo } from "../HowTo";
import { Location } from "../location";
import { Jizdne } from "../TablesTickets";
import { JizdenkyMobil } from "../TableTicketsMobile";
import { PapiroveJizdenky } from "../TableTicketsPaper";

import styles from "./TicketItem.module.css";

const types = [
  "Pipni a Jed",
  "Predplatni jizdenka",
  "Jizdenky v mobilu",
  "Tistene jizdenky",
  "Revize jizdenek a pokuty",
  "Prodejny jizdnych dokladu",
];

export const ToogleGroup: FC = () => {
  // const [active, setActive] = useState(types[0]);

  const [style_0, setStyle_0] = useState("TicketButtonToogle");
  const [style_1, setStyle_1] = useState("TicketButtonItem");
  const [style_2, setStyle_2] = useState("TicketButtonItem");
  const [style_3, setStyle_3] = useState("TicketButtonItem");
  const [style_4, setStyle_4] = useState("TicketButtonItem");
  const [style_5, setStyle_5] = useState("TicketButtonItem");
  const [active, setActive] = useState(types[0]);

  function handleClick(type: string) {
    setStyle_0("TicketButtonItem");
    setStyle_1("TicketButtonItem");
    setStyle_2("TicketButtonItem");
    setStyle_3("TicketButtonItem");
    setStyle_4("TicketButtonItem");
    setStyle_5("TicketButtonItem");
    switch (type) {
      case types[0]:
        setStyle_0("TicketButtonToogle");
        setActive(types[0]);
        break;
      case types[1]:
        setStyle_1("TicketButtonToogle");
        setActive(types[1]);
        break;
      case types[2]:
        setStyle_2("TicketButtonToogle");
        setActive(types[2]);
        break;
      case types[3]:
        setStyle_3("TicketButtonToogle");
        setActive(types[3]);
        break;
      case types[4]:
        setStyle_4("TicketButtonToogle");
        setActive(types[4]);
        break;
      case types[5]:
        setStyle_5("TicketButtonToogle");
        setActive(types[5]);
        break;
    }
  }

  function showText(type: string) {
    if (type === types[0]) {
      return <HowTo />;
    } else if (type === types[1]) {
      return <Jizdne />;
    } else if (type === types[2]) {
      return <JizdenkyMobil />;
    } else if (type === types[3]) {
      return <PapiroveJizdenky />;
    } else if (type === types[4]) {
      return <Fines />;
    } else if (type === types[5]) {
      return <Location />;
    }
  }

  // function setBackgroundColor(){
  //   document.getElementById("button").backgroundColor = #283593;
  // }

  return (
    <div>
      <div className={styles["item"]}>
        <button
          className={styles[style_0]}
          onClick={() => handleClick(types[0])}
        >
          {types[0]}
        </button>

        <button
          className={styles[style_1]}
          onClick={() => handleClick(types[1])}
        >
          {types[1]}
        </button>

        <button
          className={styles[style_2]}
          onClick={() => handleClick(types[2])}
        >
          {types[2]}
        </button>

        <button
          className={styles[style_3]}
          onClick={() => handleClick(types[3])}
        >
          {types[3]}
        </button>

        <button
          className={styles[style_4]}
          onClick={() => handleClick(types[4])}
        >
          {types[4]}
        </button>

        <button
          className={styles[style_5]}
          onClick={() => handleClick(types[5])}
        >
          {types[5]}
        </button>
      </div>
      <h1 style={{ textAlign: "center" }}>Vybrane: {active}</h1>
      {showText(active)}
    </div>
  );
};

// const PapiroveJizdenky: FC = () => {
//   return(
//   <div className={styles["jizdne"]}>
//       <text> PapiroveJizdenky </text>
//   </div>
//   )
// }
