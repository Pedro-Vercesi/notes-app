import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";
import { SearchBar } from "./components/SearchBar";
import { useNotes } from "./hooks/useNotes";

export const App = () => {
  const {
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
  } = useNotes();

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
