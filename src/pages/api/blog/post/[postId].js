export default function handler(req, res) {
  const postId = req.query.postId;

  // Run some database logic

  if (req.method === "POST") {
    res.status(200).json({ text: `Post ${req.body}` });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
