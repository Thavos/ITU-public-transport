-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Connection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "stops" TEXT NOT NULL,
    "exclusion" TEXT NOT NULL,
    "signs" TEXT NOT NULL DEFAULT 'o: zastávka od 20 do 5 hodin na znamení-z: zastávka celodenně na znamení-w: zastávka v prac.dnech od 20 do 5 hodin, v sobotu a neděli celodenně na znamení'
);
INSERT INTO "new_Connection" ("exclusion", "id", "number", "stops", "type") SELECT "exclusion", "id", "number", "stops", "type" FROM "Connection";
DROP TABLE "Connection";
ALTER TABLE "new_Connection" RENAME TO "Connection";
CREATE TABLE "new_Destination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "lastStop" TEXT NOT NULL,
    "timings" TEXT NOT NULL,
    "workdays" TEXT NOT NULL,
    "holidays" TEXT NOT NULL,
    "weekends" TEXT NOT NULL,
    "signs" TEXT NOT NULL DEFAULT 'L : jede po trase jen po zastávku Lipová-N : jede jen do zastávky Nové sady a dále do smyčky Nové sady-$ : spoj není zajištěn bezbariérově přístupným vozidlem-Všechny spoje linky, s výjimkou odjezdů označených symbolem $, jsou zajišťovány bezbariérověpřístupným vozidlem'
);
INSERT INTO "new_Destination" ("holidays", "id", "lastStop", "number", "timings", "weekends", "workdays") SELECT "holidays", "id", "lastStop", "number", "timings", "weekends", "workdays" FROM "Destination";
DROP TABLE "Destination";
ALTER TABLE "new_Destination" RENAME TO "Destination";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
