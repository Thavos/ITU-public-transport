# Webová aplikácia pre hromadnú dopravu

ITU Projekt 2022/23

Členovia tímu:
- Šimon Peter Hrúz (xhruzs00) (kapitán)
- Samuel Synek (xsynek04)
- Tomáš Bražina (xbrazi01)


## Inštalácia

Pre inštaláciu je potrebný `yarn package manager` 
(https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

Následne zadáme inštalačný príkaz,
```bash
yarn install
```
Vo všetkých adresároch:
- xlogin00_src
- xlogin00_src/client
- xlogin00_src/server

## Použitie

Pre spustenie musíme najprv spustiť server
```bash
cd server
yarn start:dev
```

Následne spustíme klienta v novom terminály
```bash
cd client
yarn start
```

V tomto momente nám beží serverová časť na 
`http://localhost:4000/` a klientská časť na `http://localhost:3000/`

V klientovy je na nakonfigurovaná proxy, ktorá presmeruváva requesty ktoré majú ísť na server `/api/XY`