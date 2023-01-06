import Head from "next/head";

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta content="Home" property="og:title" />
        <meta content="Home" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
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
