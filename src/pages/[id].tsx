import { GetStaticProps, GetStaticPaths } from "next";
import App from "components/App";

const RecipePage = ({ markdown }: { markdown: string }) => {
  return <App initialText={markdown} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      markdown: `# ${params?.id}`,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default RecipePage;
