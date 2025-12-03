import axios from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface TaskPayload {
  id: string;
  name: string;
  done: boolean;
}

const taskReq = async (data: TaskPayload): Promise<TaskPayload | void> => {
  try {
    const response = await axios.post<TaskPayload>("", data);

    console.log(response);
  } catch (error) {}
};

function App() {
  const [nameTask, setNameTask] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const db = [];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const min = 1;
    const max = 100;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!nameTask) {
      console.log("erro!");
    }

    console.log(randomNumber);

    db.push(nameTask);
    console.log("oiii");
  };

  return (
    <main className="w-full h-screen flex justify-center items-center flex-column">
      <div className="w-200 h-200  flex items-center flex-col p-5">
        <h1 className="text-lg uppercase">SEBASTIANA</h1>
        <form onSubmit={handleSubmit} className="w-full flex gap-3">
          <input
            type="text"
            placeholder="Escreva sua tarefa.."
            className="w-full rounded-lg pl-3"
            value={nameTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setNameTask(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-yellow-500 cursor-pointer py-3 px-6 rounded-lg"
          >
            adicionar
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
