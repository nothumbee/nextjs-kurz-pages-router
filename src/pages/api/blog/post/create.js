export default function handler(req, res) {
  // get body
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({ status: "Title or content is missing" });
  }

  // save to database
  //  const post = await prisma.post.create({

  // return success or error
  if (!error) {
    res.status(200).json({ status: "success" });
  } else {
    res.status(500).json({ status: "error" });
  }
}
