import { useState } from "react";
import "./EditBoard.css";

export function EditBoard({
  todos,
  onAddTodos,
  onUpdateTodos,
  onDeleteTodo,
  id,
}) {
  const targetTodo = todos.find((todo) => todo.id === id);
  const [editingTodo, setEditingTodo] = useState(
    targetTodo ? targetTodo : { id: 0, text: "" },
  );
  const [noInput, setNoInput] = useState(false);

  if (id !== editingTodo.id) {
    setEditingTodo(id !== 0 ? targetTodo : { id: 0, text: "" });
    setNoInput(null);
  }

  function updateTextarea(e) {
    setEditingTodo({ ...editingTodo, text: e.target.value });
    setNoInput(e.target.value === "" ? true : false);
  }

  function addTodo() {
    if (editingTodo.text === "") {
      setNoInput(true);
      return;
    }

    onAddTodos(editingTodo);
    setEditingTodo({ id: 0, text: "" });
  }

  function updateTodos() {
    if (noInput) return;
    onUpdateTodos(editingTodo);
  }

  function deleteTodo() {
    onDeleteTodo(editingTodo);
  }

  return (
    <div className="wrap">
      <textarea value={editingTodo.text} onChange={(e) => updateTextarea(e)} />
      <div className="text">
        {editingTodo.id === 0 ? (
          <button onClick={() => addTodo()}>新規作成</button>
        ) : (
          <>
            <button onClick={() => updateTodos()}>編集</button>
            <button onClick={() => deleteTodo()}>削除</button>
          </>
        )}
      </div>
      {noInput ? <div className="error">空入力は禁止です</div> : ""}
    </div>
  );
}
