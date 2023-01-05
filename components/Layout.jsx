import Head from "next/head";
// import { useEffect } from "react";

function Layout({ children, title }) {
  //   useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta content="Home" property="og:title" />
        <meta content="Home" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        {/* <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="/css/test-page-feacec.webflow.css"
          rel="stylesheet"
          type="text/css"
        /> */}
        <link
          href="/images/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
        {/* <link href="/css/custom.css" rel="stylesheet" type="text/css" /> */}
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
