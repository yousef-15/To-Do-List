export default function CompletedTasks({ tasks }) {
  const inCompleteTasks = tasks.filter((task) => task.completed === false);
  return (
    <div className="footer">
      <p>{inCompleteTasks.length} tasks left</p>
    </div>
  );
}
