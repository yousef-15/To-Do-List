import { useEffect, useState } from "react";
import "../CSS/App.css";
import Header from "./Header";
import AddTask from "./AddTasks";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  function taskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <Header />
      <AddTask setTasks={setTasks} tasks={tasks} />
      <TaskList tasks={tasks} taskCompleted={taskCompleted} />
      <CompletedTasks tasks={tasks} />
    </div>
  );
}
