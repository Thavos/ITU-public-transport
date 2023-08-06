// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState } from "react";

// components
import { Footer } from "../../../components/xhruzs00/Footer";
import { HierarchyNav } from "../../../components/xhruzs00/HierarchyNav";

import { useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import classnames from "classnames";

export const RegisterPage: FC = () => {
  // Test data just to showcase error state
  const user = { email: "user@gmail.com" };
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [pwd, setPwd] = useState<string>();
  const [err, setErr] = useState<boolean>(false);

  const navigate = useNavigate();

  const loginAction = (e: any) => {
    e.preventDefault();

    console.log("Place for fetch to server database, for registration.");

    if (email !== user.email) {
      navigate("/ucet");
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div>
      <HierarchyNav label2="Registrace" />

      <div className={styles["main"]}>
        <form onSubmit={(e) => loginAction(e)} className={styles["form"]}>
          <label htmlFor="name">Jméno</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Zadejte své krestní jméno..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="lastName">Příjmení</label>
          <input
            id="lastName"
            type="text"
            required
            placeholder="Zadejte své příjmení..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Zadejte email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErr(false);
            }}
            className={classnames(err && styles["err"])}
          />
          {err && (
            <div className={styles["err-msg"]}>* E-mail je již registrován</div>
          )}

          <label htmlFor="pwd">Password</label>
          <input
            id="pwd"
            type="password"
            required
            minLength={8}
            placeholder="Zadejte heslo..."
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />

          <button className={styles["btn"]} type="submit">
            Registrovat
          </button>
        </form>

        {err && (
          <div className={styles["register-cont"]}>
            <div>Už máte účet? Přihlašte se zde:</div>
            <a href="/prihlaseni">Přihášení</a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
