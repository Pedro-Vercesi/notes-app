import { useEffect, useState } from "react";
import type { Note } from "../types/types";

const inputClass = "text-white m-2 w-full bg-neutral-950 p-2";

interface Props {
  createNote: (note: Note) => void;
  editNote: (id: string, updatedData: Omit<Note, "id" | "createdAt">) => void;
  editingNote: Note | null;
  setEditingNote: (note: Note | null) => void;
}

export const NoteForm = ({
  createNote,
  editNote,
  editingNote,
  setEditingNote,
}: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (editingNote === null) return;
    setTitle(editingNote.title);
    setContent(editingNote.content);
    setTags(editingNote.tags.join(","));
  }, [editingNote]);

  const cleanForm = () => {
    setTitle("");
    setContent("");
    setTags("");
    setEditingNote(null);
  };

  const handleSave = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingNote) {
      editNote(editingNote.id, {
        title,
        content,
        tags: tags.split(",").map((t) => t.trim()),
      });
    } else {
      const note: Note = {
        id: crypto.randomUUID(),
        title,
        content,
        tags: tags.split(",").map((t) => t.trim()),
        createdAt: new Date(),
      };
      createNote(note);
    }

    cleanForm();
  };

  return (
    <form
      onSubmit={(e) => handleSave(e)}
      className="flex flex-col items-center w-full border-2 border-white rounded-sm p-4"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={inputClass}
        type="text"
        placeholder="Title..."
      />
      <textarea
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={inputClass}
        placeholder="Content..."
      />
      <input
        onChange={(e) => setTags(e.target.value)}
        value={tags}
        className={inputClass}
        type="text"
        placeholder="Tags"
      />

      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={cleanForm}
          className="text-white bg-neutral-950 py-1 px-2 rounded-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-red-600 py-1 px-2 rounded-sm"
        >
          Save note
        </button>
      </div>
    </form>
  );
};
