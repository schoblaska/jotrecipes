import { GetStaticProps, GetStaticPaths } from "next";
import App from "components/App";

const RecipePage = ({ text }: { text: string }) => {
  return <App initialText={text} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      text: `# ${params?.id}`,
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
