import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import "./TodoTable.css";

export function TodoTable({ todos }) {
  return (
    <div className="TodoTable">
      <h2>一覧</h2>
      <div className="Board">
        <ViewBoard todos={todos} />
      </div>
      <h2>編集</h2>
      <div className="Board">
        <EditBoard todos={todos}/>
      </div>
    </div>
  );
}
