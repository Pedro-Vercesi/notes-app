import { useEffect, useState } from "react";
import type { Filter, Note } from "../types/types";

export const useNotes = () => {
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

  return {
    notes,
    query,
    setQuery,
    sortBy,
    setSortBy,
    editingNote,
    setEditingNote,
    derivedNotes,
    createNote,
    deleteNote,
    editNote,
  };
};
