export default function Page(props) {
  console.log("props", props);

  return (
    <div>
      <h1>Static Site Generation</h1>

      <p>some content for ssg page</p>

      <ul>
        {props.articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async (context) => {
  // fetch data from an API

  return {
    props: {
      articles: [
        { id: "1", title: "title1" },
        { id: "2", title: "title2" },
      ],
    },
  };
};
