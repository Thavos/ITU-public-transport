// Author: Simon Peter Hruz (xhruzs00)
import { FC, useEffect, useState } from "react";

import styles from "./ExclusionsTable.module.css";

interface ExclusionsTableProps {
  vehNum: string;
}

export const ExclusionsTable: FC<ExclusionsTableProps> = ({ vehNum }) => {
  const [excl, setExcl] = useState<string>();

  useEffect(() => {
    fetch("/api/connection/exclusions/" + vehNum, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setExcl(data.exclusion);
      });
  }, [vehNum]);

  return (
    <div className={styles["text"]}>
      {excl && <>{excl}</>}
      {!excl && <>Nenalezeny žádné změny v dopravě</>}
    </div>
  );
};
