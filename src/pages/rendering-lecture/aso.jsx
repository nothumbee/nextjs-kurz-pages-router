export default function Page() {
  return <div>Page</div>;
}

// No getStaticProps, getStaticPaths, getServerSideProps, or getInitialProps
// Which means this page will be completely static
// This is the default behavior of Next.js
// It will generate a static HTML file for this page at build time
// And it will serve that static HTML in production
// The page will be hydrated on the client side
