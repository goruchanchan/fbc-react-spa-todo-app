import { ViewBoard } from "./ViewBoard";
import { useState } from "react";
import "./EditBoard.css";

export function EditBoard({ todos }) {
  const [editingText, setEditingText] = useState(todos[3].content);

  function changeTextarea(e) {
    setEditingText(e.target.value);
  }

  return (
    <div className="row-list">
      <div className="item">
        <ViewBoard todos={todos} />
      </div>
      <div className="item">
        <div className="wrap">
          <textarea value={editingText} onChange={(e) => changeTextarea(e)} />
          <div className="content">
            <button>編集</button>
            <button>削除</button>
          </div>
        </div>
      </div>
    </div>
  );
}
