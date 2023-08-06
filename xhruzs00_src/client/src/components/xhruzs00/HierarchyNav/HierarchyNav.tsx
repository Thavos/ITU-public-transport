// Author: Simon Peter Hruz (xhruzs00)
import { FC } from "react";

import styles from "./HierarchyNav.module.css";
import classnames from "classnames";

interface HierarchyNavProps {
  label1?: string;
  url1?: string;
  label2: string;
  url2?: string;
  myStyle?: boolean;
}

export const HierarchyNav: FC<HierarchyNavProps> = ({
  label1 = "Domov",
  url1 = "/",
  label2,
  url2 = "",
  myStyle = true,
}) => {
  return (
    <nav
      className={classnames(styles["section-nav"], myStyle && styles["adjust"])}
    >
      <a href={url1}>{label1}</a>
      <p>{">"}</p>
      <a className={styles["active-link"]} href={url2}>
        {label2}
      </a>
    </nav>
  );
};
