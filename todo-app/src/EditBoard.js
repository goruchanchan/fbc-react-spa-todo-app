import { ViewBoard } from "./ViewBoard";
import { useState } from "react";
import "./EditBoard.css";

export function EditBoard({
  todos,
  onSetEditingTodoId,
  onUpdateTodos,
  onDeleteTodo,
  id,
}) {
  const editingIndex = todos.findIndex((todo) => todo.id === id);
  const [editingText, setEditingText] = useState(
    editingIndex !== -1 ? todos[editingIndex].content : ""
  );
  const [editingId, setEditingId] = useState(id);

  if (id !== editingId) {
    setEditingId(id);
    setEditingText(id !== null ? todos[editingIndex].content : "");
  }

  function updateTextarea(e) {
    setEditingText(e.target.value);
  }

  return (
    <div className="row-list">
      <div className="item">
        <ViewBoard
          todos={todos}
          onSetEditingTodoId={onSetEditingTodoId}
          editingId={id}
        />
      </div>
      <div className="item">
        <div className="wrap">
          <textarea value={editingText} onChange={(e) => updateTextarea(e)} />
          <div className="content">
            {editingId === null ? (
              <button onClick={() => null}>新規作成</button>
            ) : (
              <>
                <button
                  onClick={() =>
                    onUpdateTodos({
                      id: editingId,
                      content: editingText,
                    })
                  }
                >
                  編集
                </button>
                <button onClick={() => onDeleteTodo(editingId)}>削除</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
