// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/* => /api/*
// pages/api/hello.js => /api/hello

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });

  // if (req.method === 'POST') {

  // res.status(500).json({ error: 'failed to load data' })
  // res.status(500).send({ error: 'failed to fetch data' })

  // dynamic
  //   const { pid } = req.query
  // res.end(`Post: ${pid}`)
}
