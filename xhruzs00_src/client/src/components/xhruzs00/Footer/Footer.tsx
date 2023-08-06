// Author: Simon Peter Hruz (xhruzs00)
import { FC } from "react";

import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-cont"]}>
        <h2>Cestování</h2>
        <a href="/">Spojení</a>
        <a href="/">Elektronická šalinkarta</a>
        <a href="/">Pípni a jeď!</a>
        <a href="/">SMS jízdenky</a>
        <a href="/">Prodejny jízdných dokladu</a>
      </div>

      <div className={styles["footer-cont"]}>
        <h2>O DPMB</h2>
        <a href="/">O nás</a>
        <a href="/">Kariéra</a>
        <a href="/">Akiality</a>
        <a href="/">Videa & podcasty</a>
        <a href="/">Fanshop DPMB</a>
      </div>

      <div className={styles["footer-cont"]}>
        <h2>Informace</h2>
        <a href="/">Ochrana osobních údajů</a>
        <a href="/">Kamerový systém</a>
        <a href="/">Cookies</a>
      </div>

      <div className={styles["footer-cont"]}>
        <h2>Dále hledáte</h2>
        <a href="/">Ztráty a nálezy</a>
        <a href="/">Logo DPMB</a>
        <a href="/">Pro média</a>
      </div>
    </div>
  );
};
