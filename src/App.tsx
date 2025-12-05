import { useState, type ChangeEvent, type FormEvent } from "react";
import TaskItems from "./components/TaskItems";

const db = [
  { id: "1", name: "Revisar estrutura de componentes", done: true },
  { id: "2", name: "Integrar API de login", done: false },
  { id: "3", name: "Criar o componente Card", done: true },
  { id: "4", name: "Definir o layout do Dashboard", done: false },
];

interface Task {
  id: string;
  name: string;
  done: boolean;
}

function App() {
  const [nameTask, setNameTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(db);

  const handleToggleDone = (id: string) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(updatedTask);
  };

  const handleDeleteTask = (id: string) => {
    const newListTasks = tasks.filter((task) => task.id !== id);

    setTasks(newListTasks);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nameTask.trim()) {
      console.log("Erro: tarefa vazia!");
      return;
    }
    const randomId: string = String(Math.floor(Math.random() * 10000));

    const newTask: Task = {
      id: randomId,
      name: nameTask,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setNameTask("");
  };

  return (
    <main className="w-full h-screen flex justify-center items-center flex-column bg-slate-900">
      <div className="w-200 h-200  flex items-center flex-col p-5 bg-slate-800 rounded-lg">
        <header className="w-full h-auto text-center">
          <h1 className="text-4xl uppercase mt-5 font-medium text-white">
            lista de tarefas
          </h1>
          <form onSubmit={handleSubmit} className="w-full flex gap-3 my-8">
            <input
              type="text"
              placeholder="Escreva sua tarefa.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg \
shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 \
focus:border-indigo-500 transition duration-150 ease-in-out \
placeholder-gray-400 text-gray-900 text-white"
              value={nameTask}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setNameTask(e.target.value);
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center \
px-6 py-3 border border-transparent text-base font-medium rounded-lg \
shadow-md text-white bg-indigo-600 hover:bg-indigo-700 \
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 \
transition duration-150 ease-in-out cursor-pointer text-white"
            >
              adicionar
            </button>
          </form>
        </header>
        <div className="w-full h-full">
          <ul>
            {tasks.map((task: any) => (
              <TaskItems
                key={task.id}
                id={task.id}
                name={task.name}
                done={task.done}
                onToggleDone={handleToggleDone}
                onClick={() => handleDeleteTask(task.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
