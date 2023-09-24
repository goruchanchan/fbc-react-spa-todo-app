import "./ViewBoard.css";

export function ViewBoard({ todos }) {
  for (const todo of todos) {
    console.log(todo.content);
  }

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="edit-todo">{todo.content}</div>
        </li>
      ))}
      <li>+</li>
    </>
  );
}
