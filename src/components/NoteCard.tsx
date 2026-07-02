import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import type { Note } from "../types/types";

interface Props {
  note: Note;
  deleteNote: (id: string) => void;
  setEditingNote: (note: Note | null) => void;
}

export const NoteCard = ({ note, deleteNote, setEditingNote }: Props) => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-800 p-2">
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-semibold text-lg">{note.title}</h3>
        <p className="text-white">{note.content}</p>
        <div>
          {note.tags.map((nt) => (
            <span
              className="bg-red-800 text-white text-sm px-2 py-0.5 rounded-lg mr-2"
              key={nt}
            >
              {nt}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 text-white">
        <button onClick={() => setEditingNote(note)} className="cursor-pointer">
          <FaEdit />
        </button>
        <button onClick={() => deleteNote(note.id)} className="cursor-pointer">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};
