// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import { Footer } from "../../../components/xhruzs00/Footer";
import { HierarchyNav } from "../../../components/xhruzs00/HierarchyNav";
import { NavigationBar } from "../../../components/xhruzs00/NavigationBar";

import styles from "./NewsPage.module.css";

type Article = {
  label: string;
  desc: string[];
  picture: string;
};

export const NewsPage: FC = () => {
  const [article, setArticle] = useState<Article>();
  const location = useLocation();

  useEffect(() => {
    fetch(
      "/api/connection/article/" +
        location.pathname[location.pathname.length - 1],
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
        let newData = data;
        newData.desc = data.desc.split("|");
        setArticle(newData);
      });
  }, [location.pathname]);

  return (
    <div>
      <NavigationBar />

      <HierarchyNav label2={article?.label || "Neznámí název"} />

      <div className={styles["main-section"]}>
        <div className={styles["label"]}>{article && article.label}</div>

        <div className={styles["main"]}>
          <div className={styles["img-cont"]}>
            <img
              src={article && article.picture}
              alt={article && article.label}
            />
          </div>

          <div className={styles["text"]}>
            {article && article.desc.map((c) => <p>{c}</p>)}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
