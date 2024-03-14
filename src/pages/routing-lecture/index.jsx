import { useRouter } from "next/router";

const savePostToDatabase = async () => {
  const promise = new Promise((resolve, reject) => {
    // ... save to database
    setTimeout(() => {
      resolve("myPostId1234");
    }, 1000);
  });

  return promise;
};

export default function Home() {
  const router = useRouter();

  const handleSavePost = async () => {
    console.log("Saving post to database...");
    const postId = await savePostToDatabase();
    console.log("Post saved to database with ID:", postId);

    router.push(`/routing-lecture/post/${postId}`);
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-lg font-bold">Welcome to Our Website</h1>

        <button
          type="button"
          className="mt-4 bg-slate-500 rounded-lg p-6 text-white"
          onClick={handleSavePost}
        >
          Save post to database
        </button>
      </div>
    </div>
  );
}
