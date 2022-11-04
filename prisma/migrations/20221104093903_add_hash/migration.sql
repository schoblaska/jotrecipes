/*
  Warnings:

  - Added the required column `hash` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL
);
INSERT INTO "new_Recipe" ("id", "slug", "text", "title") SELECT "id", "slug", "text", "title" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe_slug_key" ON "Recipe"("slug");
CREATE UNIQUE INDEX "Recipe_hash_key" ON "Recipe"("hash");
CREATE INDEX "Recipe_slug_idx" ON "Recipe"("slug");
CREATE INDEX "Recipe_hash_idx" ON "Recipe"("hash");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
