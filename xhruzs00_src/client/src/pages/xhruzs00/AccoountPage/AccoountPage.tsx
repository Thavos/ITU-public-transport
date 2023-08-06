// Author: Simon Peter Hruz (xhruzs00)
import { FC } from "react";
import { Footer } from "../../../components/xhruzs00/Footer";
import { HierarchyNav } from "../../../components/xhruzs00/HierarchyNav";
import { NavigationBar } from "../../../components/xhruzs00/NavigationBar";

// components
import styles from "./AccoountPage.module.css";

export const AccoountPage: FC = () => {
  return (
    <div>
      <NavigationBar />

      <HierarchyNav label2="Účet" />

      <div className={styles["main"]}>Generický obsah účtu mhd</div>

      <Footer />
    </div>
  );
};
