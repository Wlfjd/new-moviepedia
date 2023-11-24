import { useState } from "react";
import "./ReviewForm.css";

export function ReviewForm() {
  const [title, settitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  return (
    <form className="ReviewForm">
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
    </form>
  );
}
