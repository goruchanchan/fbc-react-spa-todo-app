import { ViewBoard } from "./ViewBoard";
import "./EditBoard.css";

export function EditBoard() {
  return (
    <>
      <div class="row-list">
        <div class="item">
          <ViewBoard />
        </div>
        <div class="item">
          <div class="wrap">
            <textarea/>
            <div class="content">
              <button>編集</button>
              <button>削除</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
