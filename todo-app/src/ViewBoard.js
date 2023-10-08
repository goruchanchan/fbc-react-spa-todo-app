import "./ViewBoard.css";

export function ViewBoard({ todos, onSetSelectTodoId, selectedTodoId = null }) {
  function extractFirstLine(todo) {
    return todo.split(/\n/)[0];
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button
            className={selectedTodoId === todo.id ? "no-link" : "unique-link"}
            onClick={() => onSetSelectTodoId(todo.id)}
          >
            <span className={selectedTodoId === todo.id ? "" : "edit-todo"}>
              {extractFirstLine(todo.text)}
            </span>
          </button>
        </li>
      ))}
      <li>
        <button className={"unique-link"} onClick={() => onSetSelectTodoId(0)}>
          +
        </button>
      </li>
    </ul>
  );
}
