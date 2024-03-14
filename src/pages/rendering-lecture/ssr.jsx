export default function Page(props) {
  console.log("props", props);

  return (
    <div>
      <h1>Server-side Rendering</h1>

      <p>some content: </p>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // fetch data from an API
  const articles = [
    { id: "1", title: "title1" },
    { id: "2", title: "title2" },
  ];

  return {
    props: {},
  };
};
