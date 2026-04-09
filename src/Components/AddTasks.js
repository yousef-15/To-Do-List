export default function AddTask({ setTasks, tasks }) {
  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a new task..."
        className="task-input"
      />
      <button
        className="add-button"
        onClick={() => {
          const newTask = {
            id: Date.now(),
            text: document.querySelector(".task-input").value,
            completed: false,
          };
          setTasks([...tasks, newTask]);
          document.querySelector(".task-input").value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}
