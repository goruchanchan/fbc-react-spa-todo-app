import "./ViewBoard.css";

export function ViewBoard({ todos }) {

  function extractFirstLine(todo){
    return todo.split(/\n/)[0];
  }

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="edit-todo">{extractFirstLine(todo.content)}</div>
        </li>
      ))}
      <li>+</li>
    </>
  );
}
