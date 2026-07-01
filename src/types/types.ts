export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
};

export type Filter = "newest" | "oldest" | "alphabetically";
