import { useState } from "react";
import "./ReviewForm.css";

export function ReviewForm() {
  const [title, settitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  return (
    <form
      className="ReviewForm"
      onSubmit={(e) => {
        console.log(title, rating, content);
        e.preventDefault();
      }}
    >
      <input
        value={title}
        placeholder="영화제목을 입력해주세요"
        onChange={(e) => settitle(e.target.value)}
      ></input>
      <input
        value={rating}
        type="number"
        onChange={(e) => setRating(Number(e.target.value) || 0)}
      ></input>
      <textarea
        value={content}
        placeholder="영화내용을 입력해주세요"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button>확인</button>
      {/* 일반적으로 폼 내에서 <button>을 사용하면 이 버튼은 "submit" 유형의 버튼으로 간주되어 폼을 제출 */}
    </form>
  );
}
