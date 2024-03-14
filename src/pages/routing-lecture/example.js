import Link from "next/link";

const postId = "xyz1";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-lg font-bold">Welcome to Our Website</h1>

        <div className="my-2 font-medium">Menu:</div>
        <ul>
          <li>
            <Link href="/routing-lecture/about">About</Link>
          </li>
          <li>
            <Link href="/routing-lecture/post/1">Post 1</Link>
          </li>
          <li>
            <Link href={`/routing-lecture/post/${postId}`}>Post {postId}</Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/routing-lecture/post/[postId]",
                query: { postId: postId },
              }}
            >
              Post {postId}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// const getPostLink = (postId) => `/routing-lecture/post/${postId}`;

// router.push("/routing-lecture/post/NextCourse")
// router.push(getPostLink("NextCourse"))

// Shallow routing allows you to change the URL without running data fetching methods again, that includes getServerSideProps, getStaticProps, and getInitialProps.
// You'll receive the updated pathname and the query via the router object (added by useRouter or withRouter), without losing state.
//     router.push('/?counter=10', undefined, { shallow: true })
// Shallow routing only works for URL changes in the current page.
