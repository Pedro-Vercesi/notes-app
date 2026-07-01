import { NoteCard } from "./NoteCard";

export const NoteList = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full border-2 border-white rounded-sm p-4 max-h-100 overflow-y-auto">
      {<NoteCard />}
      {<NoteCard />}
      {<NoteCard />}
      {<NoteCard />}
      {<NoteCard />}
      {<NoteCard />}
    </div>
  );
};
