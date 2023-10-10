import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import { useState, useEffect } from "react";

import "./TodoTable.css";

export function TodoTable() {
  const jsonData = localStorage.getItem("todos");
  const localStorageTodos = jsonData === null ? [] : JSON.parse(jsonData);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
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

  function addTodos(todo) {
    const newTodo = { ...todo, id: calculateMaxId() + 1 };
    setTodos([...todos, newTodo]);
    setSelectedTodoId(null);
    setIsEdit(false);
  }

  function updateTodos(updatedTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    setTodos(updatedTodos);
  }

  function selectTodoId(id) {
    id === null ? setIsEdit(false) : setIsEdit(true);
    setSelectedTodoId(id);
  }

  function deleteTodo(deleteTodo) {
    const updatedTodos = todos.filter((todo) => todo.id !== deleteTodo.id);
    setTodos(updatedTodos);
    setSelectedTodoId(null);
    setIsEdit(false);
  }

  return (
    <div className="todo-table">
      <h2>{isEdit ? "編集" : "一覧"}</h2>
      <div className="board">
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
