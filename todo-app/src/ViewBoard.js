import "./ViewBoard.css";

export function ViewBoard({ todos, onSetEditingTodoId, editingId = null }) {
  function extractFirstLine(todo) {
    return todo.split(/\n/)[0];
  }

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button
            className={editingId === todo.id ? "NoLink" : "UniqueLink"}
            onClick={() => onSetEditingTodoId(todo.id)}
          >
            <div className={editingId === todo.id ? "" : "edit-todo"}>
              {extractFirstLine(todo.content)}
            </div>
          </button>
        </li>
      ))}
      <li>
        <button
          className={"UniqueLink"}
          onClick={() => onSetEditingTodoId(null)}
        >
          +
        </button>
      </li>
    </>
  );
}
