import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import { useState, useEffect } from "react";

import "./TodoTable.css";

export function TodoTable({ localStorageTodos }) {
  const [editingTodoId, setEditingTodoId] = useState(0);
  const [todos, setTodos] = useState(localStorageTodos);
  const [isEdit, setIsEdit] = useState(false);

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
    setEditingTodoId(0);
  }

  function updateTodos(updatedTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    setTodos(updatedTodos);
  }

  function editTodo(id) {
    id === 0 ? setIsEdit(false) : setIsEdit(true);
    setEditingTodoId(id);
  }

  function deleteTodo(deleteTodoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== deleteTodoId);
    setTodos(updatedTodos);
    setEditingTodoId(0);
  }

  return (
    <div className="todo-table">
      <h2>{isEdit ? "編集" : "一覧"}</h2>
      <div className="board">
        <div className="row-list">
          <div className="item">
            <ViewBoard
              todos={todos}
              onSetEditingTodoId={editTodo}
              editingId={editingTodoId}
            />
          </div>
          <div className="item">
            <EditBoard
              todos={todos}
              onAddTodos={addTodos}
              onUpdateTodos={updateTodos}
              onDeleteTodo={deleteTodo}
              id={editingTodoId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
