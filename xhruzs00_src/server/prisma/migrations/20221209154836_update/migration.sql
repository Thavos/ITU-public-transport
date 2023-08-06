/*
  Warnings:

  - Added the required column `picture` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "picture" TEXT NOT NULL
);
INSERT INTO "new_Article" ("desc", "id", "label") SELECT "desc", "id", "label" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
