export default function handler(req, res) {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    res.status(200).json({ text: `Post ${req.body}` });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
