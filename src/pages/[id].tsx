import type { NextPage } from "next";

const RecipePage: NextPage = ({ markdown }) => {
  return <p>{markdown}</p>;
};

export async function getStaticProps({ params }) {
  return {
    props: {
      markdown: `ID: ${params.id}`,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default RecipePage;
