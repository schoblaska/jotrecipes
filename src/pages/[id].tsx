import type { NextPage } from "next";

const RecipePage: NextPage = ({ markdown }) => {
  return <p>{markdown}</p>;
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      markdown: `ID: ${params.id}`,
    },
  };
}

export default RecipePage;
