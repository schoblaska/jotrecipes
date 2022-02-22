import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    res.status(200).json({ url: "https://recipebox.jsch.io/i214joi1j24o" });
  } else {
    res.status(404);
  }
};

export default handler;
