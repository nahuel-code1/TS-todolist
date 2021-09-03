import React, { FC, ChangeEvent,useState } from 'react';
import { TodoTask } from "./components/todoTask";
import { ITask } from "./interfaces";

export const App: FC = () => {
  const [ task, setTask ] = useState<string>("");
  const [ deadLine, setDeadLine ] = useState<number>(0);
  const [ id, setId ] = useState<number>(0);
  const [ todo, setTodo ] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = () => {
      const newTask = { id_task: id, task_name: task, deadline: deadLine };
      setTodo([...todo, newTask]);
      setId(id + 1);
  };

  const deleteTask = ( taskIdToDelete: number ) => {
    const filterTodo:ITask[] = todo.filter(element => element.id_task !== taskIdToDelete);
    setTodo(filterTodo);
  };

  return (
    <div>
      <div>
        <input 
        type="text" 
        placeholder="Task" 
        name="task" 
        onChange={handleChange} />
        <input 
        type="number" 
        placeholder="Finish Day" 
        name="deadLine" 
        onChange={handleChange}
        /> 
        <button onClick={addTask}>
          Add Task
        </button>
      </div>
      <div>
        {todo && todo.map((element: ITask, i: number) => {
          return (
            <TodoTask task={element} key={i} deleteTask={deleteTask} />
          )
        })}
      </div>
    </div>
  )
}