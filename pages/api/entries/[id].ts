import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "../../../database";
import { Entry } from "../../../models";
import { IEntry } from "../../../models/Entry";

type Data =
  | {
      message: string;
    }
  | IEntry
  | null;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(200).json({ message: "Id not invalid " + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    default:
      return res.status(400).json({ message: "Method is not supported" });
  }
}
const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();
  const entryToUpdate = await Entry.findById(id);
  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(404).json({ message: "Entry not found" });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { new: true, runValidators: true }
    );

    await db.disconnect();
    return res.status(200).json(updatedEntry!);
  } catch (error: any) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: error.errors.status.message });
  }
};
