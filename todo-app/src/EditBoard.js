import { ViewBoard } from "./ViewBoard";
import { useState, useContext } from "react";
import { LoginContext } from "./LoginContext";
import "./EditBoard.css";

export function EditBoard({
  todos,
  onSetEditingTodoId,
  onAddTodos,
  onUpdateTodos,
  onDeleteTodo,
  id,
}) {
  const editingIndex = todos.findIndex((todo) => todo.id === id);
  const [editingText, setEditingText] = useState(
    editingIndex !== -1 ? todos[editingIndex].text : "",
  );
  const [editingId, setEditingId] = useState(id);
  const [noInput, setNoInput] = useState(undefined);
  const login = useContext(LoginContext);

  if (id !== editingId) {
    setEditingId(id);
    setEditingText(id !== 0 ? todos[editingIndex].text : "");
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

  function editView() {
    return (
      <>
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
      </>
    );
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
          <textarea
            readOnly={login ? false : true}
            value={editingText}
            onChange={(e) => updateTextarea(e)}
          />
          {login ? editView() : null}
        </div>
      </div>
    </div>
  );
}
