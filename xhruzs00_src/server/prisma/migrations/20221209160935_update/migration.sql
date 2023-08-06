/*
  Warnings:

  - You are about to drop the column `descShrot` on the `Article` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "descShort" TEXT NOT NULL DEFAULT '',
    "desc" TEXT NOT NULL,
    "picture" TEXT NOT NULL
);
INSERT INTO "new_Article" ("desc", "id", "label", "picture") SELECT "desc", "id", "label", "picture" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
