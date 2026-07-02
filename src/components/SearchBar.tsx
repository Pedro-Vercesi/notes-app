import type { Filter } from "../types/types";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  sortBy: Filter;
  setSortBy: (filter: Filter) => void;
}

export const SearchBar = ({ query, setQuery, sortBy, setSortBy }: Props) => {
  return (
    <div className="flex items-center w-full border-2 border-white rounded-sm p-4">
      <div>🔍</div>
      <input
        className="flex-1 text-white m-2  bg-neutral-950 p-2"
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        onChange={(e) => setSortBy(e.target.value as Filter)}
        value={sortBy}
        className="text-white bg-neutral-600 p-2"
        name=""
        id=""
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="alphabetically">Alphabetically</option>
      </select>
    </div>
  );
};
