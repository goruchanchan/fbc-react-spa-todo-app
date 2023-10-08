import "./ViewBoard.css";

export function ViewBoard({ todos, onSetEditingTodoId, editingId = null }) {
  function extractFirstLine(todo) {
    return todo.split(/\n/)[0];
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button
            className={editingId === todo.id ? "no-link" : "unique-link"}
            onClick={() => onSetEditingTodoId(todo.id)}
          >
            <span className={editingId === todo.id ? "" : "edit-todo"}>
              {extractFirstLine(todo.text)}
            </span>
          </button>
        </li>
      ))}
      <li>
        <button className={"unique-link"} onClick={() => onSetEditingTodoId(0)}>
          +
        </button>
      </li>
    </ul>
  );
}
