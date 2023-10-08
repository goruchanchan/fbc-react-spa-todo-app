import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import { useState, useEffect } from "react";
import { useLogin } from "./LoginContext";

import "./TodoTable.css";

export function TodoTable({ localStorageTodos }) {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [todos, setTodos] = useState(localStorageTodos);
  const { login, onSetLogin } = useLogin();

  useEffect(() => {
    const jsonData = JSON.stringify(todos, undefined, 1);
    localStorage.setItem("todos", jsonData);
  }, [todos]);

  function calculateMaxId() {
    const maxId =
      todos.length === 0 ? 0 : Math.max(...todos.map((todo) => todo.id));
    return maxId;
  }

  function addTodos(editingText) {
    const todo = { id: calculateMaxId() + 1, text: editingText };
    setTodos([...todos, todo]);
    setEditingTodoId(null);
  }

  function updateTodos(updatedTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    setTodos(updatedTodos);
  }

  function updateLogin() {
    // 新規作成の編集中にログイン状態が切れた時には、一覧表示状態に戻す
    if (login && editingTodoId === 0) setEditingTodoId(null);

    onSetLogin();
  }

  function deleteTodo(deleteTodoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== deleteTodoId);
    setTodos(updatedTodos);
    setEditingTodoId(null);
  }

  const title = login ? "ログイン済" : "未ログイン";
  const loginButtonText = login ? "ログアウト" : "ログイン";

  return (
    <div className="TodoTable">
      <h2>{title}</h2>
      <div className="Board">
        <div className="LoginButton">
          <button onClick={() => updateLogin()}>{loginButtonText}</button>
        </div>

        {editingTodoId === null ? (
          <ViewBoard todos={todos} onSetEditingTodoId={setEditingTodoId} />
        ) : (
          <EditBoard
            todos={todos}
            onSetEditingTodoId={setEditingTodoId}
            onAddTodos={addTodos}
            onUpdateTodos={updateTodos}
            onDeleteTodo={deleteTodo}
            id={editingTodoId}
          />
        )}
      </div>
    </div>
  );
}
