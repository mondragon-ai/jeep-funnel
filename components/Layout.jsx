import Head from "next/head";
import Script from "next/script";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Tittle</title>
        <meta content="Home" property="og:title" />
        <meta content="Home" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        {/* <script
          src="https://sandbox.web.squarecdn.com/v1/square.js"
          async
        ></script> */}
        <link
          href="/images/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
