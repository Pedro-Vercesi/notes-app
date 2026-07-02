import type { Note } from "../types/types";
import { NoteCard } from "./NoteCard";

interface Props {
  notes: Note[];
  deleteNote: (id: string) => void;
  setEditingNote: (note: Note | null) => void;
}

export const NoteList = ({
  notes,
  deleteNote,

  setEditingNote,
}: Props) => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full border-2 border-white rounded-sm p-4 max-h-100 overflow-y-auto">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          setEditingNote={setEditingNote}
        />
      ))}
    </div>
  );
};
