import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
import { padding, slugify } from "lib/helpers";
import { Prisma, Recipe } from "@prisma/client";

const createRecipe = async (
  title: string,
  text: string,
  npad: number = 4
): Promise<Recipe | null> => {
  const slug = `${padding(npad)}-${slugify(title)}`;

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
      return null;
    }
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const recipe = await createRecipe("my title", "my text");

    if (recipe === null) {
      res.status(500);
    } else {
      res.status(200).json({ url: `https://recipebox.jsch.io/${recipe.slug}` });
    }
  } else {
    res.status(404);
  }
};

export default handler;
