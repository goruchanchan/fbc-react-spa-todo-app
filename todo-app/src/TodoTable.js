import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import { useState } from "react";

import "./TodoTable.css";

export function TodoTable({ todos }) {
  const [editingTodoId, setEditingTodoId] = useState(2);

  return (
    <div className="TodoTable">
      <h2>一覧</h2>
      <div className="Board">
        <ViewBoard todos={todos} onSetEditingTodoId={setEditingTodoId} />
      </div>
      <h2>編集</h2>
      <div className="Board">
        <EditBoard
          todos={todos}
          onSetEditingTodoId={setEditingTodoId}
          id={editingTodoId}
        />
      </div>
    </div>
  );
}
