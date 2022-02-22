import App from "components/App";
import { GetStaticPaths, GetStaticProps } from "next";
import prisma from "lib/prisma";

const RecipePage = ({ text }: { text: string }) => {
  return <App initialText={text} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        slug: (params?.slug || "") as string,
      },
    });

    if (!recipe) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        text: recipe.text,
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

export default RecipePage;