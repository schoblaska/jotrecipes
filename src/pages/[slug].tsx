import React, { useRef, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import prisma from "lib/prisma";
import parseRecipes from "lib/parseRecipes";
import App from "components/App";
import Recipe from "components/Recipe";
import Button from "components/Button";
import PrintButton from "components/PrintButton";
import { PencilIcon } from "components/Icons";

const RecipePage = ({ text }: { text: string }) => {
  const printRef = useRef<HTMLDivElement>(null);
  const [showApp, setShowApp] = useState(false);
  const recipes = parseRecipes(text);

  if (showApp) {
    return <App initialText={text} />;
  }

  return (
    <div className="mx-auto max-w-prose px-4 font-serif md:px-0" ref={printRef}>
      <div className="my-8 flex w-full items-center print:hidden">
        <div className="flex-grow">
          Created with{" "}
          <Link href="/">
            <a className="text-purple-700 underline hover:text-purple-600">
              Jot Recipes
            </a>
          </Link>
          .
        </div>
        <div className="mr-2">
          <Button icon={<PencilIcon />} onClick={() => setShowApp(true)}>
            Edit
          </Button>
        </div>
        <div>
          <PrintButton printRef={printRef} />
        </div>
      </div>
      <div className="max-w-prose print:pt-20">
        {recipes.map((recipe, i) => (
          <Recipe recipe={recipe} key={i} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const slug = Array.isArray(params.slug) ? params.slug.join("") : params.slug;

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { slug },
    });

    if (!recipe) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        text: recipe.text,
        metaOpenGraphTitle: generateMetaOpenGraphTitle(recipe.text),
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const generateMetaOpenGraphTitle = (text: string) => {
  const recipes = parseRecipes(text);
  return recipes.map((r) => r.titleText).join(", ");
};

export default RecipePage;
