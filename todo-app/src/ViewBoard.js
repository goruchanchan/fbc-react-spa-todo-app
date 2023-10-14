import "./ViewBoard.css";

export function ViewBoard({ todos, onSelectTodoId, selectedTodoId = null }) {
  function extractFirstLine(todoText) {
    return todoText.split(/\n/)[0];
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button
            className={selectedTodoId === todo.id ? "no-link" : "unique-link"}
            onClick={() => onSelectTodoId(todo.id)}
          >
            <span className={selectedTodoId === todo.id ? "" : "edit-todo"}>
              {extractFirstLine(todo.text)}
            </span>
          </button>
        </li>
      ))}
      <li>
        <button className={"unique-link"} onClick={() => onSelectTodoId(0)}>
          +
        </button>
      </li>
    </ul>
  );
}
