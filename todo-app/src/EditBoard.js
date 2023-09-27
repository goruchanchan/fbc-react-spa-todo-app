import { ViewBoard } from "./ViewBoard";
import { useState } from "react";
import "./EditBoard.css";

export function EditBoard({ todos, onSetEditingTodoId, onUpdateTodos, id }) {
  const editingIndex = todos.findIndex((todo) => todo.id === id);

  const [editingText, setEditingText] = useState(
    editingIndex !== -1 ? todos[editingIndex].content : ""
  );
  const [editingId, setEditingId] = useState(id);

  if (id !== editingId) {
    setEditingId(id);
    setEditingText(todos[editingIndex].content);
  }

  function updateTextarea(e) {
    setEditingText(e.target.value);
  }

  return (
    <div className="row-list">
      <div className="item">
        <ViewBoard todos={todos} onSetEditingTodoId={onSetEditingTodoId} />
      </div>
      <div className="item">
        <div className="wrap">
          <textarea value={editingText} onChange={(e) => updateTextarea(e)} />
          <div className="content">
            <button
              onClick={() =>
                onUpdateTodos({
                  id: editingId,
                  content: editingText,
                  editing: false,
                })
              }
            >
              編集
            </button>
            <button>削除</button>
          </div>
        </div>
      </div>
    </div>
  );
}
