import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import { useState, useEffect } from "react";
import { useLogin } from "./LoginContext";

import "./TodoTable.css";

export function TodoTable() {
  const jsonData = localStorage.getItem("todos");
  const localStorageTodos = JSON.parse(jsonData) ?? [];
  const [selectedTodoId, setSelectedTodoId] = useState(null);
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

  function addTodos(todo) {
    const newTodo = { ...todo, id: calculateMaxId() + 1 };
    setTodos([...todos, newTodo]);
    setSelectedTodoId(null);
  }

  function updateTodos(updatedTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    setTodos(updatedTodos);
  }

  function updateLogin() {
    // 新規作成の編集中にログイン状態が切れた時には、一覧表示状態に戻す
    if (login && selectedTodoId === 0) setSelectedTodoId(null);

    onSetLogin();
  }

  const title = login ? "ログイン済" : "未ログイン";
  const loginButtonText = login ? "ログアウト" : "ログイン";

  function selectTodoId(id) {
    setSelectedTodoId(id);
  }

  function deleteTodo(deleteTodo) {
    const updatedTodos = todos.filter((todo) => todo.id !== deleteTodo.id);
    setTodos(updatedTodos);
    setSelectedTodoId(null);
  }

  return (
    <div className="todo-table">
      <h2>{title}</h2>
      <div className="board">
        <div className="login-button">
          <button onClick={() => updateLogin()}>{loginButtonText}</button>
        </div>

        <div className="row-list">
          <div className="item">
            <ViewBoard
              todos={todos}
              onSelectTodoId={selectTodoId}
              selectedTodoId={selectedTodoId}
            />
          </div>
          <div className="item">
            <EditBoard
              todos={todos}
              onAddTodos={addTodos}
              onUpdateTodos={updateTodos}
              onDeleteTodo={deleteTodo}
              selectedTodoId={selectedTodoId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
