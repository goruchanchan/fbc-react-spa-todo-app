import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import "./ViewBoard.css";

export function ViewBoard({ todos, onSetEditingTodoId, editingId = null }) {
  const login = useContext(LoginContext);

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
              {extractFirstLine(todo.text)}
            </div>
          </button>
        </li>
      ))}
      {login ? (
        <li>
          <button
            className={"UniqueLink"}
            onClick={() => onSetEditingTodoId(0)}
          >
            +
          </button>
        </li>
      ) : null}
    </>
  );
}
