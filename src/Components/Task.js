export default function Task({ text, id, completed, taskCompleted }) {
  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => taskCompleted(id)}
      />
      <span>{text}</span>
    </div>
  );
}
