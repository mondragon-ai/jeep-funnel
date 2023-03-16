import Head from "next/head";
import Script from "next/script";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Hodge Twins Sweeps Stakes</title>
        <meta name="description" content={"Enter a chance to win a new vehicle & $10,000 Cash!"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Enter a chance to win a new vehicle & $10,000 Cash!" />
        <meta
          property="og:description"
          content="Enter a chance to win a new vehicle & $10,000 Cash!"
        />
        <meta
          property="og:image"
          content="https://hodgetwins.goingbigly.com/hosted/images/5c/272d0ce18c44cb851c7459279df8a7/Jeep-Giveaway.png"
        />
        <meta content="Home" property="og:title" />
        <meta content="Home" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <script
          src="https://sandbox.web.squarecdn.com/v1/square.js"
          async
        ></script> */}
        <link
          href="/images/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10793712364"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10793712364');`
          }}
        ></script>
        <link href="/images/webclip.png" rel="apple-touch-icon" />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
