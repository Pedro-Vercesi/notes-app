import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-neutral-950">
      <div className="flex flex-col gap-3 items-center bg-neutral-900 border border-neutral-700 rounded-xl p-5 w-full max-w-2xl">
        <h1 className="text-white">Note App</h1>
        <SearchBar />
        <NoteForm />
        <NoteList />
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
