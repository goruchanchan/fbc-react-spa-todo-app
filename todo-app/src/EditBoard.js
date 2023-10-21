import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
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
  const [inputError, setInputError] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    setEditingTodo(targetTodo ?? { id: 0, text: "" });
  }, [targetTodo]);

  function updateTextarea(e) {
    const value = e.target.value;
    setEditingTodo({ ...editingTodo, text: value });
  }

  function isNoInput() {
    const noInput = editingTodo.text === "";
    noInput ? setInputError(true) : setInputError(false);
    return noInput;
  }

  function addTodo() {
    if (isNoInput()) return;

    onAddTodos(editingTodo);
    setEditingTodo({ id: null, text: "" });
  }

  function updateTodos() {
    if (isNoInput()) return;

    onUpdateTodos(editingTodo);
  }

  function deleteTodo() {
    onDeleteTodo(editingTodo);
  }

  function viewEditButton() {
    return (
      <>
        <div className="editing">
          {selectedTodoId === 0 ? (
            <button onClick={() => addTodo()}>新規作成</button>
          ) : (
            <>
              <button onClick={() => updateTodos()}>編集</button>
              <button onClick={() => deleteTodo()}>削除</button>
            </>
          )}
        </div>
        {inputError && <div className="error">空入力は禁止です</div>}
      </>
    );
  }

  return (
    <div className="wrap">
      {selectedTodoId !== null && (
        <>
          <textarea
            readOnly={isLoggedIn ? false : true}
            value={editingTodo.text}
            onChange={(e) => updateTextarea(e)}
          />
          {isLoggedIn && viewEditButton()}
        </>
      )}
    </div>
  );
}
