// Author: Simon Peter Hruz (xhruzs00)
import { FC, useEffect, useState } from "react";

// components
import { Footer } from "../../../components/xhruzs00/Footer";
import { HierarchyNav } from "../../../components/xhruzs00/HierarchyNav";
import { NavigationBar } from "../../../components/xhruzs00/NavigationBar";

import styles from "./StopsPage.module.css";

type StopType = {
  label: string;
  connections: string[];
};

export const StopsPage: FC = () => {
  const [stops, setStops] = useState<StopType[]>();
  const [query, setQuery] = useState<string>("");
  let foundOne = false;
  let result = false;

  // Fetch data from backend on page load
  useEffect(() => {
    fetch("/api/stops", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        data.map((c: any) => (c.connections = c.connections.split("-")));
        setStops(data);
      });
  }, []);

  return (
    <div>
      <NavigationBar />

      <HierarchyNav label2="Zastávky" />

      <div className={styles["main"]}>
        <div className={styles["label"]}>Zastávky</div>

        {/* Search bar for stops */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles["search"]}
          placeholder="Vyhledat"
        />

        <div className={styles["table"]}>
          <div className={styles["table-rows"]}>
            <div
              className={styles["table-names"]}
              style={{ fontWeight: "bold" }}
            >
              Jméno
            </div>

            <div
              className={styles["table-numbers"]}
              style={{ fontWeight: "bold" }}
            >
              Spojení
            </div>
          </div>
          {stops &&
            stops.map((c) => {
              result = false;

              let myQuery = query.split(" ");
              myQuery = myQuery.map((c) => c.toLowerCase());

              const myLabel = c.label.toLowerCase();

              let myConnections = c.connections.map((c) => c.toLowerCase());

              if (
                myQuery.some((subq) =>
                  myConnections.find((element) => {
                    if (element.includes(subq)) return true;
                    return false;
                  })
                ) ||
                myQuery.some((subq) => myLabel.includes(subq))
              ) {
                foundOne = true;
                result = true;
              }

              return (
                <>
                  {(!query || (query && result)) && (
                    <>
                      <div className={styles["table-rows"]}>
                        <div className={styles["table-names"]}>{c.label}</div>

                        <div className={styles["table-numbers"]}>
                          {c.connections.map((d) => (
                            <div>{d}</div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          {!foundOne && (
            <div className={styles["table-names"]}>Žádná zhoda</div>
          )}
        </div>
        <div className={styles["info-text"]}>
          *Do vyhledávače zadejte jméno zastávky nebo číslo spojení
        </div>
      </div>

      <Footer />
    </div>
  );
};
