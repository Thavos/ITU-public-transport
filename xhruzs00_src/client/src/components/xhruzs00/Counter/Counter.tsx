// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState } from "react";

import styles from "./Counter.module.css";

export const Counter: FC = () => {
  const [cnt, setCnt] = useState<number>(0);

  const incCounter = () => {
    setCnt(cnt + 1);
  };

  return (
    <div className={styles["cont"]}>
      <h3>Counter: {cnt}</h3>
      <button style={{ marginLeft: "2rem" }} onClick={incCounter}>
        +
      </button>
    </div>
  );
};
