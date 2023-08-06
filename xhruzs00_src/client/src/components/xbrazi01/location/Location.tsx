// Author: Tomas Brazina (xbrazi01)
import { FC } from "react";
import { useState } from "react";
import * as React from "react";

import styles from "./Location.module.css";

export const Location: FC = () => {
  return (
    <div className={styles["block"]}>
      <div className={styles["item"]}>
        <h1 className={styles["label"]}> Novobranská </h1>
        <p className={styles["text"]}>Novobranská 18, Brno, 602 00</p>
        <p className={styles["text"]}>Otevírací doba:</p>
        <p className={styles["text"]}>PO–PÁ: 7:00–18:00</p>
      </div>

      <div className={styles["item"]}>
        <h1 className={styles["label"]}> Bystrc ZOO </h1>
        <p className={styles["text"]}>
          zastávka autobusů a trolejbusů Zoologická zahrada
        </p>
        <p className={styles["text"]}>Otevírací doba:</p>
        <p className={styles["text"]}>PO–PÁ: 7:00–18:00</p>
      </div>

      <div className={styles["item"]}>
        <h1 className={styles["label"]}> Mendlovo náměstí </h1>
        <p className={styles["text"]}>
          Mendlovo náměstí 19 - naproti vstupu do kláštera
        </p>
        <p className={styles["text"]}>Otevírací doba:</p>
        <p className={styles["text"]}>PO–PÁ: 7:00–18:00</p>
      </div>

      <div className={styles["item"]}>
        <h1 className={styles["label"]}> Stará osada </h1>
        <p className={styles["text"]}>konečná stanice tramvají</p>
        <p className={styles["text"]}>Otevírací doba:</p>
        <p className={styles["text"]}>PO–PÁ: 7:00–18:00</p>
      </div>

      <div className={styles["item"]}>
        <h1 className={styles["label"]}> Královo Pole, nádraží </h1>
        <p className={styles["text"]}>konečná stanice tramvají</p>
        <p className={styles["text"]}>Otevírací doba:</p>
        <p className={styles["text"]}>PO–PÁ: 7:00–18:00</p>
      </div>
    </div>
  );
};
