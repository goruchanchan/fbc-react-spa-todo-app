import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import { useState } from "react";

import "./TodoTable.css";

export function TodoTable({ localStorageTodos }) {
  const [editingTodoId, setEditingTodoId] = useState(2);
  const [todos, setTodos] = useState(localStorageTodos);

  function updateTodos(updatedTodo) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === updatedTodo.id ? updatedTodo : todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="TodoTable">
      <h2>一覧</h2>
      <div className="Board">
        <ViewBoard todos={todos} onSetEditingTodoId={setEditingTodoId} />
      </div>
      <h2>編集</h2>
      <div className="Board">
        <EditBoard
          todos={todos}
          onSetEditingTodoId={setEditingTodoId}
          onUpdateTodos={updateTodos}
          id={editingTodoId}
        />
      </div>
    </div>
  );
}
