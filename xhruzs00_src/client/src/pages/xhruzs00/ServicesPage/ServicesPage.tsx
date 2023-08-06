// Author: Simon Peter Hruz (xhruzs00)
import { FC } from "react";

// components
import { Footer } from "../../../components/xhruzs00/Footer";
import { HierarchyNav } from "../../../components/xhruzs00/HierarchyNav";
import { NavigationBar } from "../../../components/xhruzs00/NavigationBar";

import styles from "./ServicesPage.module.css";
import classnames from "classnames";

type PanelType = {
  label: string;
  picture: string;
  url: string;
};

export const ServicesPage: FC = () => {
  const panels: PanelType[] = [
    {
      label: "Reklama",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/10/sluzby_dpmb-3.png.webp?itok=fiv9V2sh",
      url: "https://www.dpmb.cz/reklama",
    },
    {
      label: "Seniorbus",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/10/seniorbus.png.webp?itok=YMTTQ9de",
      url: "https://www.dpmb.cz/seniorbus",
    },
    {
      label: "Dopravní asistent",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/10/sluzby_dpmb-4.png.webp?itok=a2c1VICT",
      url: "https://www.dpmb.cz/dopravni-asistent",
    },
    {
      label: "Autoškola",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/11/autoskola_1.png.webp?itok=OCgdwNSx",
      url: "https://www.dpmb.cz/autoskola-skolici-stredisko-dpmb",
    },
    {
      label: "Pronájem vozidel",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/10/sluzby_dpmb-2.png.webp?itok=Q3JwfeXZ",
      url: "https://www.dpmb.cz/pronajem-vozidel",
    },
    {
      label: "Exkurze",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/10/exkurze.png.webp?itok=p7_Wa5Mn",
      url: "https://www.dpmb.cz/exkurze",
    },
    {
      label: "Servis pro vaše vozy",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/10/servis-pro-vase-vozy.png.webp?itok=COfZEkYZ",
      url: "https://www.dpmb.cz/servis-pro-vase-vozy",
    },
    {
      label: "Centrum psychologických služeb UNITY ↗",
      picture:
        "https://www.dpmb.cz/sites/default/files/styles/optimized/public/images/2022/10/unity.png.webp?itok=46B4dfXv",
      url: "https://unity.dpmb.cz/",
    },
  ];

  return (
    <div>
      <NavigationBar />

      <HierarchyNav label2="Služby" />

      <div className={styles["main"]}>
        {/* <div className={styles["label"]}>Služby</div> */}

        <div className={styles["table"]}>
          {panels.map((c, index) => {
            const table = [
              "big",
              "small",
              "small",
              "big",
              "big",
              "small",
              "small",
              "big",
            ];

            return (
              <div
                style={{ backgroundImage: `url(${c.picture})` }}
                className={classnames(
                  styles[table[index]],
                  styles["panel-photo"]
                )}
              >
                <a className={styles["panel"]} href={c.url}>
                  <div>{c.label}</div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};
