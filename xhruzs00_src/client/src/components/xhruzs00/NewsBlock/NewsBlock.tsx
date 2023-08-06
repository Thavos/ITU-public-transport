// Author: Simon Peter Hruz (xhruzs00)
import { FC } from "react";

import styles from "./NewsBlock.module.css";

export interface NewsProps {
  id: string;
  url: string;
  label: string;
  desc?: string;
}

export const NewsBlock: FC<NewsProps> = ({ id, url, label, desc }) => {
  return (
    <a className={styles["block"]} href={"/clanky/" + id}>
      <div className={styles["img-cont"]}>
        <img src={url} alt={label} />
      </div>
      <p className={styles["label"]}>{label}</p>
      <div className={styles["block-desc"]}>
        <p className={styles["desc"]}>{desc}</p>
        <p className={styles["btn"]}>{">"}</p>
      </div>
    </a>
  );
};
