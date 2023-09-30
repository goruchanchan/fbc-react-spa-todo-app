import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import { useState, useEffect } from "react";

import "./TodoTable.css";

export function TodoTable({ localStorageTodos }) {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [todos, setTodos] = useState(localStorageTodos);

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
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  }

  function deleteTodo(deleteTodoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== deleteTodoId);
    setTodos(updatedTodos);
    setEditingTodoId(null);
  }

  let title = "編集";
  if (editingTodoId === null) {
    title = "一覧";
  } else if (editingTodoId === 0) {
    title = "新規";
  }

  return (
    <div className="TodoTable">
      <h2>{title}</h2>
      <div className="Board">
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
