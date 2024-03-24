export default function Page() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch("/api/blog/post/create", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        Title:
        <input
          type="text"
          name="title"
          className="border border-blue-600 px-4 py-2 rounded-md"
        />
        Content:
        <input
          type="text"
          name="content"
          className="border border-blue-600 px-4 py-2 rounded-md"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-lime-500 text-white px-4 py-2 rounded-md"
        />
      </form>
    </div>
  );
}
