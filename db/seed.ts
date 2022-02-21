import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const recipeData: Prisma.RecipeCreateInput[] = [
  {
    slug: "9afd-jeffrey-morgenthalers-eggnog",
    title: "Jeffrey Morgenthaler's Eggnog",
    text: `# [Eggnog](https://jeffreymorgenthaler.com/egg-nog) | Jeffrey Morgenthaler | serves 2-3

## 1
* 2 large eggs

Beat in blender for one minute on medium speed.

## 2
* 3 oz (by volume) superfine or baker's sugar (NOT powdered!)

Slowly add sugar and blend for one additional minute.

## 3
* 4 oz brandy, rum, or bourbon (or a mix)
* 6 oz whole milk
* 4 oz heavy cream

With blender still running, add liquor, milk, and cream until combined.

## 4
* Whole nutmeg cloves, for garnish

Chill thoroughly to allow flavors to combine and serve in chilled wine glasses or champagne coupes, grating nutmeg on top immediately before serving.`,
  },
];

async function main() {
  console.log("Start seeding ...");

  for (const r of recipeData) {
    const recipe = await prisma.recipe.create({
      data: r,
    });
    console.log(`Created recipe with id: ${recipe.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
