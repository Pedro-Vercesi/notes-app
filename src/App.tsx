import { useEffect, useState } from "react";
import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";
import { SearchBar } from "./components/SearchBar";
import type { Filter, Note } from "./types/types";

const MOCK_NOTES: Note[] = [
  {
    id: "1",
    title: "Nota 1",
    content: "contenido de la nota",
    tags: ["react", "node"],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Nota 2",
    content: "contenido de la nota 2",
    tags: ["JS", "dev"],
    createdAt: new Date("2025-02-15"),
  },
  {
    id: "3",
    title: "Nota 3",
    content: "contenido de la nota 3",
    tags: ["JS", "dev", "TS"],
    createdAt: new Date("2025-02-16"),
  },
];

export const App = () => {
  const getNotes = (): Note[] => {
    const stored = JSON.parse(localStorage.getItem("notes") || "[]");
    return stored.map((note: Note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
    }));
  };

  const [notes, setNotes] = useState<Note[]>(getNotes);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<Filter>("newest");
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const derivedNotes = notes
    .filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "alphabetically") return a.title.localeCompare(b.title);
      const order = sortBy === "newest" ? -1 : 1;
      return order * (a.createdAt.getTime() - b.createdAt.getTime());
    });

  const createNote = (note: Note) => {
    if (!note.title.trim() || !note.content.trim()) return;

    setNotes([...notes, note]);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (
    id: string,
    updatedData: Omit<Note, "id" | "createdAt">,
  ) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, ...updatedData } : note,
    );
    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-neutral-950">
      <div className="flex flex-col gap-3 items-center bg-neutral-900 border border-neutral-700 rounded-xl p-5 w-full max-w-2xl">
        <div className="flex justify-between w-full">
          <h1 className="text-white">Note App</h1>
          <span className="text-white bg-neutral-600 py-0.2 px-2 rounded-lg ">
            {notes.length} Notes
          </span>
        </div>

        <SearchBar
          query={query}
          setQuery={setQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <NoteForm
          createNote={createNote}
          editNote={editNote}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
        />
        <NoteList
          notes={derivedNotes}
          deleteNote={deleteNote}
          setEditingNote={setEditingNote}
        />
      </div>
    </div>
  );
};

// Fondo: bg-neutral-950 o bg-black
// Tarjeta: bg-neutral-900
// Texto principal: text-white
// Texto secundario: text-neutral-400
// Acento rojo: bg-red-600 para botones de acción, text-red-500 para tags y detalles
// Bordes: border-neutral-700
