export default function CompletedTasks({ tasks, setTasks }) {
  const inCompleteTasks = tasks.filter((task) => task.completed === false);
  return (
    <div className="footer">
      <p>{inCompleteTasks.length} tasks left</p>
      <button className="delete-button" onClick={() => setTasks([])}>
        Delete Tasks
      </button>
    </div>
  );
}
