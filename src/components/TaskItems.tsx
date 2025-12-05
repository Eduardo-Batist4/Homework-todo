import { Trash2 } from "lucide-react";
import type { MouseEventHandler } from "react";

interface TaskItemsProp {
  id: string;
  name: string;
  done: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onToggleDone: (id: string) => void;
}

function TaskItems({ id, name, done, onClick, onToggleDone }: TaskItemsProp) {
  const handleChange = () => {
    onToggleDone(id);
  };
  return (
    <li
      key={id}
      className={`text-gray-700 leading-relaxed mb-3 pl-1 flex justify-between pr-5 py-3 border-b border-gray-400 transition duration-150 ease-in-out ${
        done ? "opacity-50 line-through" : "opacity-100"
      }`}
    >
      <span className="font-bold text-white">{name}</span>
      <div>
        <input
          type="checkbox"
          name="done"
          id={id}
          checked={done}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <button
          className="text-red-600 cursor-pointer hover:text-red-800 ease-in-out ml-3"
          onClick={onClick}
        >
          <Trash2 />
        </button>
      </div>
    </li>
  );
}

export default TaskItems;
