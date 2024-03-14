import { useRouter } from "next/router";

export default function PostDetailSlug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Slug: {slug?.join("/")}</h1>
    </div>
  );
}
