import { ViewBoard } from "./ViewBoard";
import { EditBoard } from "./EditBoard";
import "./TodoTable.css";

export function TodoTable() {
  return (
    <div div className="TodoTable">
      <h2>一覧</h2>
      <div className="Board">
        <ViewBoard />
      </div>
      <h2>編集</h2>
      <div className="Board">
        <EditBoard />
      </div>
    </div>
  );
}
