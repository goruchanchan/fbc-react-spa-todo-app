import { useState, useEffect } from "react";
import "./EditBoard.css";

export function EditBoard({
  todos,
  onAddTodos,
  onUpdateTodos,
  onDeleteTodo,
  selectedTodoId,
}) {
  const targetTodo = todos.find((todo) => todo.id === selectedTodoId);
  const [editingTodo, setEditingTodo] = useState({ id: 0, text: "" });
  const [noInput, setNoInput] = useState(false);

  useEffect(() => {
    setEditingTodo(targetTodo ? targetTodo : { id: 0, text: "" });
    setNoInput(false);
  }, [targetTodo]);

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
    setEditingTodo({ id: null, text: "" });
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
      {selectedTodoId !== null && (
        <>
          <textarea
            value={editingTodo.text}
            onChange={(e) => updateTextarea(e)}
          />
          <div className="text">
            {selectedTodoId === 0 ? (
              <button onClick={() => addTodo()}>新規作成</button>
            ) : (
              <>
                <button onClick={() => updateTodos()}>編集</button>
                <button onClick={() => deleteTodo()}>削除</button>
              </>
            )}
          </div>
          {noInput && <div className="error">空入力は禁止です</div>}
        </>
      )}
    </div>
  );
}
