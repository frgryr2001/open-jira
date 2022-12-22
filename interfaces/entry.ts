export interface Entry {
  _id: string;
  description: string;
  createAt: number;
  status: string;
}
export type EntryStatus = "pending" | "inProcess" | "finished";
