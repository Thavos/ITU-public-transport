// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState, useEffect } from "react";

import styles from "./VehiclesTable.module.css";
import classnames from "classnames";

type Vehicles = {
  type: number;
  number: string;
};

interface VehiclesTableProps {
  setActiveVehicle: (vehNum: string) => void;
}

export const VehiclesTable: FC<VehiclesTableProps> = ({ setActiveVehicle }) => {
  const [vehicles, setVehicles] = useState<Vehicles[]>();

  useEffect(() => {
    fetch("/api/connection/numbers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setVehicles(data);
      });
  }, []);

  return (
    <div className={styles["main"]}>
      <div className={styles["type"]}>
        {/* Trams */}
        <img
          alt="tram"
          src="https://img.icons8.com/glyph-neue/512/tram.png"
          className={styles["img"]}
        />

        <div className={styles["rows"]}>
          {vehicles &&
            vehicles.map((c: Vehicles, index: number) => {
              if (c.type === 0)
                return (
                  <button
                    key={"tram_" + index}
                    className={styles["vehicle"]}
                    onClick={() => {
                      setActiveVehicle(c.number);
                    }}
                  >
                    {c.number}
                  </button>
                );
              else return <></>;
            })}
        </div>
      </div>

      <div className={styles["type"]}>
        {/* Trolleybuses */}
        <img
          alt="tram"
          src="https://img.icons8.com/glyph-neue/512/trolleybus.png"
          className={styles["img"]}
        />

        <div className={styles["rows"]}>
          {vehicles &&
            vehicles.map((c: Vehicles, index: number) => {
              if (c.type === 1)
                return (
                  <button
                    key={"trolleyBus_" + index}
                    className={styles["vehicle"]}
                    onClick={() => {
                      setActiveVehicle(c.number);
                    }}
                  >
                    {c.number}
                  </button>
                );
              else return <></>;
            })}
        </div>
      </div>

      <div className={styles["type"]}>
        {/* Busses */}
        <img
          alt="tram"
          src="https://img.icons8.com/glyph-neue/512/bus.png"
          className={styles["img"]}
        />

        <div className={styles["rows"]}>
          {vehicles &&
            vehicles.map((c: Vehicles, index: number) => {
              if (c.type === 2)
                return (
                  <button
                    key={"bus_" + index}
                    className={styles["vehicle"]}
                    onClick={() => {
                      setActiveVehicle(c.number);
                    }}
                  >
                    {c.number}
                  </button>
                );
              else return <></>;
            })}
        </div>
      </div>

      <div className={styles["type"]}>
        {/* Night buses */}
        <img
          alt="tram"
          src="https://img.icons8.com/material-sharp/512/partly-cloudy-night.png"
          className={styles["img"]}
        />

        <div className={styles["rows"]}>
          {vehicles &&
            vehicles.map((c: Vehicles, index: number) => {
              if (c.type === 3)
                return (
                  <button
                    key={"nightBus_" + index}
                    className={classnames(
                      styles["vehicle"],
                      styles["night-bus"]
                    )}
                    onClick={() => {
                      setActiveVehicle(c.number);
                    }}
                  >
                    {c.number}
                  </button>
                );
              else return <></>;
            })}
        </div>
      </div>
    </div>
  );
};
