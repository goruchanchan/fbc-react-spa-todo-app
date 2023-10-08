import { useState } from "react";
import "./EditBoard.css";

export function EditBoard({
  todos,
  onAddTodos,
  onUpdateTodos,
  onDeleteTodo,
  id,
}) {
  const editingTodo = todos.find((todo) => todo.id === id);
  const [editingText, setEditingText] = useState(
    editingTodo ? editingTodo.text : "",
  );

  const [editingId, setEditingId] = useState(id);
  const [noInput, setNoInput] = useState(undefined);

  if (id !== editingId) {
    setEditingId(id);
    setEditingText(id !== 0 ? editingTodo.text : "");
    setNoInput(null);
  }

  function updateTextarea(e) {
    setEditingText(e.target.value);
    setNoInput(e.target.value === "" ? true : false);
  }

  function addTodo() {
    if (editingText === "") {
      setNoInput(true);
      return;
    }

    onAddTodos(editingText);
    setNoInput(false);
    setEditingText("");
  }

  function updateTodos() {
    if (noInput) return;

    const todo = {
      id: editingId,
      text: editingText,
    };
    onUpdateTodos(todo);
  }

  return (
    <div className="wrap">
      <textarea value={editingText} onChange={(e) => updateTextarea(e)} />
      <div className="text">
        {editingId === 0 ? (
          <button onClick={() => addTodo()}>新規作成</button>
        ) : (
          <>
            <button onClick={() => updateTodos()}>編集</button>
            <button onClick={() => onDeleteTodo(editingId)}>削除</button>
          </>
        )}
      </div>
      {noInput ? <div className="error">空入力は禁止です</div> : ""}
    </div>
  );
}
