// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState } from "react";

import styles from "./HomeSearch.module.css";
import classnames from "classnames";

export const HomeSearch: FC = () => {
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const [timeType, setTimeType] = useState<string>();

  const swapStops = () => {
    const swap = start;
    setStart(end);
    setEnd(swap);
  };

  return (
    <div>
      <div className={styles["form"]}>
        <label className={styles["label"]}>Odkud</label>
        <input
          className={styles["input"]}
          type="text"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />

        <label className={classnames(styles["label"], styles["switch-row"])}>
          Kam
        </label>
        <input
          className={styles["input"]}
          type="text"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />

        <select
          className={classnames(styles["btn"], styles["select"])}
          onChange={(e) => setTimeType(e.target.value)}
        >
          <option className={styles["option"]} value={"now"}>
            Vyráží teď
          </option>

          <option className={styles["option"]} value={"departure"}>
            Odjezd o..
          </option>

          <option className={styles["option"]} value={"arrival"}>
            Příjezd o..
          </option>
        </select>

        {timeType && timeType !== "now" && (
          <div className={styles["date-cont"]}>
            <input type="date" className={styles["input"]} />
            <input type="time" className={styles["input"]} />
          </div>
        )}

        <div className={styles["btn-cont"]}>
          <button className={styles["btn"]}>Vyhledat</button>
          <button
            className={classnames(styles["btn"], styles["btn-swap"])}
            onClick={swapStops}
          />
        </div>
      </div>
    </div>
  );
};
