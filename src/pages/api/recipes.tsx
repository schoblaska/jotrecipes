import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
import { padding, slugify } from "lib/helpers";
import { Prisma, Recipe } from "@prisma/client";

const createRecipe = async (
  title: string,
  text: string,
  npad: number = 4
): Promise<Recipe | null> => {
  const titleSlug = slugify(title);
  const slug = titleSlug ? `${padding(npad)}-${titleSlug}` : padding(npad);

  try {
    const recipe = await prisma.recipe.create({
      data: { title: title || "", text: text || "", slug },
    });

    return recipe;
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002" &&
      npad <= 16
    ) {
      // P2002 is a unique constraint violation; try again with more padding
      return createRecipe(title, text, npad + 1);
    } else {
      // TODO: log somewhere
      return null;
    }
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const recipe = await createRecipe(data.title || "", data.text || "");

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
