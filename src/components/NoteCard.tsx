import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const NoteCard = () => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-800 p-2">
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-semibold text-lg">Title</h3>
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nobis.
        </p>
        <div>
          <span className="bg-red-800 text-white text-sm px-2 py-0.5 rounded-lg">
            Tag
          </span>
        </div>
      </div>
      <div className="flex justify-end gap-2 text-white">
        <button className="cursor-pointer">
          <FaEdit />
        </button>
        <button className="cursor-pointer">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};
