// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState } from "react";

// Components
// components
import { Footer } from "../../../components/xhruzs00/Footer";
import { HierarchyNav } from "../../../components/xhruzs00/HierarchyNav";
import { NavigationBar } from "../../../components/xhruzs00/NavigationBar";
import { VehiclesTable } from "../../../components/xhruzs00/VehiclesTable";
import { StopsTable } from "../../../components/xhruzs00/StopsTable";
import { ExclusionsTable } from "../../../components/xhruzs00/ExclusionsTable";

import styles from "./ConnectionsPage.module.css";
import classnames from "classnames";

export const ConnectionsPage: FC = () => {
  const [activeVehicle, setActiveVehicle] = useState<string>();

  return (
    <>
      <NavigationBar />
      <HierarchyNav label2="Spoje" />

      <div className={styles["main"]}>
        <div className={styles["label"]}>Spoje</div>
        <VehiclesTable setActiveVehicle={setActiveVehicle} />

        {activeVehicle && (
          <>
            <div
              className={classnames(styles["label"], styles["space-between"])}
            >
              Zastávky spoje {activeVehicle}
            </div>
            <StopsTable vehNum={activeVehicle} />
          </>
        )}

        {activeVehicle && (
          <>
            <div
              className={classnames(styles["label"], styles["space-between"])}
            >
              Vínimočné situace na trase
            </div>
            <ExclusionsTable vehNum={activeVehicle} />
          </>
        )}
      </div>

      <Footer />
    </>
  );
};
