import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    res.status(200);
  } else {
    res.status(404);
  }
};

export default handler;
