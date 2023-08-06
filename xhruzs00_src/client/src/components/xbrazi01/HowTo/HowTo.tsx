// Author: Tomas Brazina (xbrazi01)
import { FC } from "react";
import styles from "./HowTo.module.css";

export const HowTo: FC = () => {
  return (
    <div>
      <h1 className={styles["label"]}>
        Ako na to: Stačí dodržet tři jednoduché kroky
      </h1>
      <div className={styles["block"]}>
        <div className={styles["step_block"]}>
          <img
            src="https://drive.google.com/uc?export=view&id=1WBjU6zxtsTT2g-4W1_jxgFMUPpV8QpED"
            alt="Brno"
          />
          <h1 className={styles["label"]}>Nastup</h1>
        </div>
        <div className={styles["step_block"]}>
          <img
            src="https://drive.google.com/uc?export=view&id=1RQKkd40casBNa5XuMR7nd5_enxWjM_C1"
            alt="Brno"
          />
          <h1 className={styles["label"]}>Pípni</h1>
        </div>
        <div className={styles["step_block"]}>
          <img
            src="https://drive.google.com/uc?export=view&id=1QN80_zsK1L2hgzwEdydYnrKV-IaZnDWd"
            alt="Brno"
          />
          <h1 className={styles["label"]}>Jeď!</h1>
        </div>
      </div>
    </div>
  );
};
