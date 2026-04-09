import Task from "./Task";

export default function TaskList({ tasks, taskCompleted }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          id={task.id}
          completed={task.completed}
          taskCompleted={taskCompleted}
        />
      ))}
    </div>
  );
}
