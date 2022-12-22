interface SeedData {
  entries: SeedEntry[];
}
interface SeedEntry {
  description: string;
  status: string;
  createAt: number;
}
export const seedData: SeedData = {
  entries: [
    {
      description: "This is the first entry",
      status: "pending",
      createAt: Date.now(),
    },
    {
      description: "This is the first entry1",
      status: "inProcess",
      createAt: Date.now() - 1000000,
    },
    {
      description: "This is the first entry2",
      status: "finished",
      createAt: Date.now() - 100000,
    },
  ],
};
