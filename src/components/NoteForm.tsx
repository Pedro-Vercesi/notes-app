const inputClass = "text-white m-2 w-full bg-neutral-950 p-2";

export const NoteForm = () => {
  return (
    <div className="flex flex-col items-center w-full border-2 border-white rounded-sm p-4">
      <input className={inputClass} type="text" placeholder="Title..." />
      <textarea className={inputClass} placeholder="Content..." />
      <input className={inputClass} type="text" placeholder="Tags" />

      <div className="flex justify-end gap-4 mt-4">
        <button className="text-white bg-neutral-950 py-1 px-2 rounded-sm">
          Cancel
        </button>
        <button className="text-white bg-red-600 py-1 px-2 rounded-sm">
          Save note
        </button>
      </div>
    </div>
  );
};
