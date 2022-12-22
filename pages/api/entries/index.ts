import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";

import { Entry, IEntry } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IEntry[]
  | IEntry;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getEntries(res);
    case "POST":
      return postEntry(req, res);
    default:
      return res.status(200).json({ message: "Endpoint not exist" });
  }
}
const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const entries = await Entry.find().sort({ createAt: "ascending" });

  await db.disconnect();

  return res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description } = req.body;
  const newEntry = new Entry({
    description,
    createAt: Date.now(),
  });

  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();
    return res.status(201).json(newEntry);
  } catch (error) {
    await db.disconnect();
    return res.status(500).json({ message: "Internal server error" });
  }
};
