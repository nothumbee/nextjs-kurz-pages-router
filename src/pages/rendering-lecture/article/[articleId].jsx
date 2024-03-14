export default function Page(props) {
  console.log("props", props);
  return (
    <div>
      <h1>{props.article.title}</h1>

      <p>some content for single article...</p>
    </div>
  );
}

// SSG
export async function getStaticProps(context) {
  // Fetch data from an API
  const articleId = context.params.articleId;

  // const article = await fetch(`https://.../articles/${articleId}`);

  return {
    props: {
      article: { id: articleId, title: "title1" },
      revalidate: 1,
    },
  };
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  // const articles = await fetch("https://.../articles");

  const paths = [
    { params: { articleId: "1" } },
    { params: { articleId: "2" } },
  ];

  return {
    paths: paths,
    fallback: "blocking",
  };
}
