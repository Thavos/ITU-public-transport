// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState, useEffect } from "react";

import styles from "./StopsTable.module.css";
import classnames from "classnames";

interface StopsTableProps {
  vehNum?: string;
}

type DaysType = {
  num: [number[]];
  cha: [string[]];
};

export const StopsTable: FC<StopsTableProps> = ({ vehNum }) => {
  const [stopSigns, setStopSigns] = useState<string[]>();
  const [timeSigns, setTimeSigns] = useState<string[]>();

  const [stops, setStops] = useState<string[]>();
  const [timings, setTimings] = useState<string[]>([""]);
  const [days, setDays] = useState<DaysType>({ num: [[]], cha: [[]] });

  const [activeStopId, setActiveStopId] = useState<number>(0);
  const [activeDay, setActiveDay] = useState<string>("workdays");

  const [forseUpdate, setForceUpdate] = useState<number>(0);

  let ovData: string[] = []; // Overflow row data in "days"

  const reverseStops = () => {
    setTimings([]);
    setDays({ num: [[]], cha: [[]] });

    setStops(stops?.reverse());
    loadTimings();
    loadDays(activeDay);

    setForceUpdate(forseUpdate + 1);
  };

  const loadTimings = () => {
    if (stops)
      fetch(
        "/api/connection/timings/" + vehNum + "/" + stops[stops.length - 1],
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          let newData = data.timings.split("-");
          setTimings(newData);

          newData = data.signs.split("-");
          setTimeSigns(newData);

          setForceUpdate(forseUpdate + 1);
        });
  };

  const loadDays = (daysType: string) => {
    if (stops)
      fetch(
        "/api/connection/days/" +
          vehNum +
          "/" +
          stops[stops.length - 1] +
          "/" +
          activeDay,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          let newDataNum = data[activeDay].split("-");
          newDataNum = newDataNum.map((c: string) => c.split(" "));
          let newDataCh = newDataNum;

          newDataCh = newDataCh.map((c: string[]) =>
            c.map((d: string) => d.replace(/[0-9]/g, ""))
          );

          newDataNum = newDataNum.map((c: string[]) =>
            c.map((d: string) => {
              let e = parseInt(d.replace(/^\D+/g, ""));
              if (Number.isNaN(e)) {
                e = -1;
              }
              return e;
            })
          );

          let newData = { num: newDataNum, cha: newDataCh };

          setDays(newData);
          setActiveDay(daysType);
          setForceUpdate(forseUpdate + 1);
        });
  };

  const changeAciveStop = (newId: number) => {
    setActiveStopId(newId);
  };

  useEffect(() => {
    fetch("/api/connection/stops/" + vehNum, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        let newData = data.stops.split("-");
        setStops(newData);

        newData = data.signs.split("-");
        setStopSigns(newData);
      });
  }, [vehNum]);

  useEffect(() => {
    if (stops)
      fetch(
        "/api/connection/timings/" + vehNum + "/" + stops[stops.length - 1],
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          let newData = data.timings.split("-");
          setTimings(newData);

          newData = data.signs.split("-");
          setTimeSigns(newData);
        });
  }, [vehNum, stops]);

  useEffect(() => {
    if (stops) {
      fetch(
        "/api/connection/days/" +
          vehNum +
          "/" +
          stops[stops.length - 1] +
          "/" +
          activeDay,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          let newDataNum = data[activeDay].split("-");
          newDataNum = newDataNum.map((c: string) => c.split(" "));
          let newDataCh = newDataNum;

          newDataCh = newDataCh.map((c: string[]) =>
            c.map((d: string) => d.replace(/[0-9]/g, ""))
          );

          newDataNum = newDataNum.map((c: string[]) =>
            c.map((d: string) => {
              let e = parseInt(d.replace(/^\D+/g, ""));
              if (Number.isNaN(e)) {
                e = -1;
              }
              return e;
            })
          );

          let newData = { num: newDataNum, cha: newDataCh };

          setDays(newData);
        });
    }
  }, [vehNum, stops, activeDay]);

  return (
    <div className={styles["main"]}>
      {vehNum && (
        <>
          <div className={styles["label"]}>
            <div>
              Směr: {stops && stops[stops?.length - 1]}
              {(stops?.length === 1 || !stops) && <>Nenalezeno</>}
            </div>
            {stops && stops.length !== 1 && (
              <button className={styles["btn-days"]} onClick={reverseStops}>
                Otočit směr
              </button>
            )}
          </div>

          {stops && timings.length === 0 && days.num[0].length === 0 && (
            <div className={styles["loading"]}>Načítání</div>
          )}
          {timings[0] && days.num[0] && stops && stops.length !== 1 && (
            <div className={styles["table"]}>
              <div
                className={classnames(
                  styles["table-column"],
                  styles["table-column-stops"]
                )}
              >
                <div className={styles["table-label"]}>Zastávky</div>

                <div className={styles["table-list"]}>
                  {stops &&
                    stops.map((c: string, index: number) => {
                      let difference;
                      if (timings && timings[index]) {
                        difference =
                          parseInt(timings[index]) -
                          parseInt(timings[activeStopId]);

                        difference =
                          difference > 0
                            ? difference
                            : difference === 0
                            ? "*"
                            : "";
                      }

                      return (
                        <button
                          key={"stop_" + index}
                          className={classnames(
                            styles["btn-stops"],
                            index === activeStopId &&
                              styles["btn-stops-active"],
                            index % 2 === 0 && styles["row-even"]
                          )}
                          onClick={() => {
                            if (index === stops.length - 1) reverseStops();
                            else changeAciveStop(index);
                          }}
                        >
                          {timings && difference + " "}
                          {c}
                        </button>
                      );
                    })}
                </div>
              </div>

              <div
                className={classnames(
                  styles["table-column"],
                  styles["table-column-hours"]
                )}
              >
                <div className={styles["table-label"]}>Hod.</div>

                <div className={styles["table-list"]}>
                  <div className={styles["row-even"]}>4 </div>
                  <div>5 </div>
                  <div className={styles["row-even"]}>6 </div>
                  <div>7 </div>
                  <div className={styles["row-even"]}>8 </div>
                  <div>9 </div>
                  <div className={styles["row-even"]}>10</div>
                  <div>11</div>
                  <div className={styles["row-even"]}>12</div>
                  <div>13</div>
                  <div className={styles["row-even"]}>14</div>
                  <div>15</div>
                  <div className={styles["row-even"]}>16</div>
                  <div>17</div>
                  <div className={styles["row-even"]}>18</div>
                  <div>19</div>
                  <div className={styles["row-even"]}>20</div>
                  <div>21</div>
                  <div className={styles["row-even"]}>22</div>
                  <div>23</div>
                </div>
              </div>

              <div
                className={classnames(
                  styles["table-column"],
                  styles["table-column-times"]
                )}
              >
                <div
                  className={classnames(
                    styles["table-label"],
                    styles["days-label"]
                  )}
                >
                  <button
                    onClick={() => loadDays("workdays")}
                    className={classnames(
                      styles["btn-days"],
                      activeDay === "workdays" && styles["btn-days-active"]
                    )}
                  >
                    Pracovní dny
                  </button>
                  <button
                    onClick={() => loadDays("holidays")}
                    className={classnames(
                      styles["btn-days"],
                      activeDay === "holidays" && styles["btn-days-active"]
                    )}
                  >
                    Pracovní dny prázdniny
                  </button>
                  <button
                    onClick={() => loadDays("weekends")}
                    className={classnames(
                      styles["btn-days"],
                      activeDay === "weekends" && styles["btn-days-active"]
                    )}
                  >
                    Sobota, Neděle, Svátek
                  </button>
                </div>

                <div className={styles["table-list"]}>
                  {days &&
                    days.num.map((c: number[], index: number) => {
                      const oldRovOv = ovData;
                      ovData = [];

                      let outNum = c.map((d) => {
                        if (d === -1) return d;

                        return d + parseInt(timings[activeStopId]);
                      });

                      let out = outNum.map((d, index2) => {
                        if (d >= 0) {
                          let time = d;

                          if (time >= 60) {
                            time = time % 60;
                          }

                          let outCha =
                            time.toString() + days.cha[index][index2] + " ";

                          if (time < 10) {
                            outCha = "0" + outCha;
                          }

                          if (d >= 60) {
                            ovData.push(outCha);
                            return "\0";
                          }

                          return outCha;
                        } else return "\0";
                      });

                      if (oldRovOv) {
                        out.map((d) => oldRovOv.push(d));
                      }

                      return (
                        <div
                          className={classnames(
                            index % 2 === 0 && styles["row-even"],
                            styles["list-row"]
                          )}
                          key={"list_" + index}
                        >
                          {oldRovOv.map((d) => {
                            if (d !== "\0") return <div>{d}</div>;
                            else return;
                          })}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
          {timings[0] && days.num[0] && stops && stops.length !== 1 && (
            <div className={styles["signs"]}>
              {stopSigns &&
                stopSigns.map((c, index) => {
                  return <div key={index}>{c}</div>;
                })}
              {timeSigns &&
                timeSigns.map((c, index) => {
                  return <div key={index}>{c}</div>;
                })}
            </div>
          )}
        </>
      )}
    </div>
  );
};
