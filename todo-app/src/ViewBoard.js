import "./ViewBoard.css";

export function ViewBoard({ todos, onSetEditingTodoId }) {
  function extractFirstLine(todo) {
    return todo.split(/\n/)[0];
  }

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button
            className="UniqueLink"
            onClick={() => onSetEditingTodoId(todo.id)}
          >
            <div className="edit-todo">{extractFirstLine(todo.content)}</div>
          </button>
        </li>
      ))}
      <li>+</li>
    </>
  );
}
