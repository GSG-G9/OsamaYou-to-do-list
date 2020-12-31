import TodoList from "./todoList";

import "./MainSide.css";

const MainSide = ({ toDoList, onRemoveTask, onAddTask, onCompleteTask }) => {
  if (!toDoList) {
    return <main>hi</main>;
  }
  return (
    <main>
      <header className="main-header">
        <h1>{toDoList.name}</h1>
      </header>
      {onCompleteTask ? (
        <TodoList
          tasks={toDoList.tasks}
          onRemoveTask={onRemoveTask}
          onAddTask={onAddTask}
          onCompleteTask={onCompleteTask}
        />
      ) : (
        <h1>no list</h1>
      )}
    </main>
  );
};
export default MainSide;
