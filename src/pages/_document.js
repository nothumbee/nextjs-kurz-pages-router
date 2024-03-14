import { Html, Head, Main, NextScript } from "next/document";

// Rendered on the server side, no onClick events
// Default head tags - favicon, meta tags, etc.

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
