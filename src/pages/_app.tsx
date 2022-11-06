import "styles/index.css";
import "styles/prism.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const metaOpenGraphTitle = pageProps["metaOpenGraphTitle"];

  return (
    <>
      <Head>
        <title>Jot Recipes</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {metaOpenGraphTitle && (
          <meta property="og:title" content={metaOpenGraphTitle} />
        )}

        <meta property="og:image" content="https://jot.recipes/brand.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
