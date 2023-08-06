// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState } from "react";

// components
import { Footer } from "../../../components/xhruzs00/Footer";
import { HierarchyNav } from "../../../components/xhruzs00/HierarchyNav";

import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import classnames from "classnames";

export const LoginPage: FC = () => {
  // Test data just to showcase error state
  const user = { email: "user@gmail.com", pwd: "123456" };
  const [email, setEmail] = useState<string>();
  const [pwd, setPwd] = useState<string>();
  const [err, setErr] = useState({ email: false, pwd: false });

  const navigate = useNavigate();

  const loginAction = (e: any) => {
    e.preventDefault();

    console.log("Place for fetch to server database, for login information.");

    if (email === user.email && pwd === user.pwd) {
      navigate("/ucet");
      setErr({ email: false, pwd: false });
    } else {
      setErr({ email: email !== user.email, pwd: pwd !== user.pwd });
    }
  };

  return (
    <div>
      <HierarchyNav label2="Přihlášení" />

      <div className={styles["main"]}>
        <form onSubmit={(e) => loginAction(e)} className={styles["form"]}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErr((c) => {
                return { email: false, pwd: c.pwd };
              });
            }}
            className={classnames(err.email && styles["err"])}
          />
          {err.email && (
            <div className={styles["err-msg"]}>* Nesprávný e-mail</div>
          )}

          <label htmlFor="pwd">Password</label>
          <input
            id="pwd"
            type="password"
            required
            placeholder="Enter your password..."
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
              setErr((c) => {
                return { email: c.email, pwd: false };
              });
            }}
            className={classnames(err.pwd && styles["err"])}
          />
          {err.pwd && (
            <div className={styles["err-msg"]}>* Nesprávné heslo</div>
          )}

          <button className={styles["btn"]} type="submit">
            Přihlásit
          </button>
        </form>

        {(err.email || err.pwd) && (
          <div className={styles["register-cont"]}>
            <div>Ješte nemáte účet? Zaregistrujte se zde:</div>
            <a href="/registrace">Registrace</a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
