// Author: Tomas Brazina (xbrazi01)
import { FC } from "react";
import styles from "./Fines.module.css";
import { useState } from "react";

export const Fines: FC = () => {
  return (
    <div className={styles["block"]}>
      <div className={styles["text_block"]}>
        <h1 className={styles["label"]}>Práva a povinnosti cestujícího</h1>
        <p className={styles["text"]}>
          Cestující je povinen mít při zahájení přepravy, po celou dobu jízdy a
          v okamžiku výstupu z vozidla platný jízdní doklad.
        </p>
        <p className={styles["text"]}>
          Jízdenku si můžete koupit platební kartou při nástupu do vozu
          prostřednictvím služby Pípni a jeď!
        </p>
        <p className={styles["text"]}>
          Papírovou jízdenku si označte ihned po nástupu do vozidla a
          zkontrolujte správnost vytištěných údajů. Případné nedostatky v
          označení reklamujte u řidiče.
        </p>
        <p className={styles["text"]}>
          V případě využití SMS jízdenky do vozu vstupujte s již doručenou
          jízdenkou. Pokud nedorazila, musíte si pořídit jiný jízdní doklad. V
          opačném případě vám při kontrole hrozí pokuta.
        </p>
        <p className={styles["text"]}>
          Kontrolu jízdních dokladů ve vozidlech MHD podle zákona č. 266/1994
          Sb., o drahách, ve znění pozdějších předpisů, provádí pracovníci
          dopravní služby ve stejnokroji nebo pověřené osoby dopravce vybavené
          kontrolním odznakem.
        </p>
        <p className={styles["text"]}>
          Naši pracovníci jsou připraveni prokázat se na vyžádání kontrolním
          průkazem, jehož číslo musí být shodné s číslem kontrolního odznaku.
        </p>
      </div>
      <div className={styles["text_block"]}>
        <h1 className={styles["label"]}>Práva a povinnosti revizorů</h1>
        <p className={styles["text"]}>
          Pracovníci dopravní služby ve stejnokroji nebo osoby pověřené
          dopravcem jsou ze zákona oprávněni:
        </p>
        <p className={styles["text"]}>
          1) dávat cestujícím pokyny k zajištění bezpečnosti a plynulosti
          dopravy,
        </p>
        <p className={styles["text"]}>
          2) kontrolovat, zda cestující plní Smluvní přepravní podmínky,
        </p>
        <p className={styles["text"]}>
          3) uložit cestujícímu, který porušuje Smluvní přepravní podmínky anebo
          nepředložil ke kontrole platný jízdní doklad, zaplacení jízdného a
          přirážky k jízdnému,
        </p>
        <p className={styles["text"]}>
          4) v případě, že cestující neuhradí přirážku k jízdnému a jízdné na
          místě v hotovosti, vyžadovat od cestujícího prokázání totožnosti
          dokladem vydaným příslušným správním úřadem (§18a, odst. 2, zákona o
          drahách, §37 zákona o silniční dopravě),
        </p>
        <p className={styles["text"]}>
          5) v případě, že se cestující neprokáže dokladem totožnosti, vyzvat
          cestujícího k setrvání na místě do příjezdu policie a cestující je
          povinen pokyn splnit,
        </p>
        <p className={styles["text"]}>
          6) vyloučit z přepravy osoby, které nesplňují ustanovení Smluvních
          přepravních podmínek a osoby, které do vozidla umístily věci, jejichž
          přeprava je zakázaná,
        </p>
        <p className={styles["text"]}>
          7) přiměřeným způsobem podle §14 zákona č. 89/2012, Sb., občanský
          zákoník, ve znění pozdějších předpisů zasáhnout vůči cestujícímu,
          který odmítl zaplatit uložené jízdné a přirážku k jízdnému, odmítl
          prokázat totožnost anebo odmítl opustit vozidlo poté, co byl vyloučen
          z přepravy.
        </p>
      </div>
    </div>
  );
};
