import { useState, useEffect } from "react";
import { useLogin } from "./LoginContext";
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
  const { login } = useLogin();

  useEffect(() => {
    setEditingTodo(targetTodo ?? { id: 0, text: "" });
    setNoInput(false);
  }, [targetTodo]);

  function updateTextarea(e) {
    const value = e.target.value;
    setEditingTodo({ ...editingTodo, text: value });
    setNoInput(!value);
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
        {noInput && <div className="error">空入力は禁止です</div>}
      </>
    );
  }

  return (
    <div className="wrap">
      {selectedTodoId !== null && (
        <>
          <textarea
            readOnly={login ? false : true}
            value={editingTodo.text}
            onChange={(e) => updateTextarea(e)}
          />
          {login && viewEditButton()}
        </>
      )}
    </div>
  );
}
