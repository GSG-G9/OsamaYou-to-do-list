import "./TodoList.css";

const TodoList = ({ tasks, onRemoveTask, onAddTask, onCompleteTask }) => {
  return (
    <>
      <section className="app-insert">
        <input
          type="text"
          name="task"
          placeholder="Insert your task here..."
          onKeyDown={onAddTask}
          autocomplete="off"
        />
      </section>
      <section className="app-list">
        <ul>
          {tasks.map((item, i) => (
            <li
              key={i}
              id={i}
              className={`task${item.isCompleat ? " task-complete" : ""}`}
              onClick={onCompleteTask}
            >
              {item.value}
              <a href="!#" className="remove-task" onClick={onRemoveTask}>
                remove
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
