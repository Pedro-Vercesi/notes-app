export const SearchBar = () => {
  return (
    <div className="flex items-center w-full border-2 border-white rounded-sm p-4">
      <div>🔍</div>
      <input
        className="flex-1 text-white m-2  bg-neutral-950 p-2"
        type="text"
        placeholder="Search notes..."
      />
      <select className="text-white bg-neutral-600 p-2" name="" id="">
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="Alphabetically">Alphabetically</option>
      </select>
    </div>
  );
};
