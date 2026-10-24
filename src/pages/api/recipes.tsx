import { Prisma, Recipe } from "generated/prisma/client";
import { padding, sluggify } from "lib/helpers";
import parseRecipes from "lib/parseRecipes";
import prisma from "lib/prisma";
import md5 from "md5";
import type { NextApiRequest, NextApiResponse } from "next";

const createRecipe = async (
  text: string,
  npad: number = 4
): Promise<Recipe | null> => {
  const hash = md5(text);

  const foundRecipe = await prisma.recipe.findUnique({
    where: { hash },
  });

  if (foundRecipe) {
    return foundRecipe;
  }

  const recipes = parseRecipes(text);
  const title = recipes.map((r) => r.titleText).join("--");
  const titleSlug = sluggify(title);
  const slug = titleSlug ? `${padding(npad)}-${titleSlug}` : padding(npad);

  try {
    return await prisma.recipe.create({
      data: { title: title || "", text: text || "", slug, hash },
    });
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002" &&
      npad <= 16
    ) {
      // P2002 is a unique constraint violation; try again with more padding
      return createRecipe(text, npad + 1);
    } else {
      // TODO: log somewhere
      return null;
    }
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // the browser posts text/plain so the body arrives as a string; Next parses
    // application/json bodies into an object before we see them
    const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const recipe = await createRecipe(data.text || "");

    if (recipe === null) {
      res.status(500);
    } else {
      // TODO: put host in env var or something
      res.status(200).json({ url: `https://jot.recipes/${recipe.slug}` });
    }
  } else {
    res.status(404);
  }
};

export default handler;
