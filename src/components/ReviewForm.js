import { useState } from "react";
import "./ReviewForm.css";

export function ReviewForm() {
  const [values, setValues] = useState({ title: "", rating: 0, content: "" });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(values);
  };

  return (
    <form
      className="ReviewForm"
      onSubmit={(e) => {
        console.log(values);
        e.preventDefault();
      }}
    >
      <input
        value={values.title}
        name="title"
        placeholder="영화제목을 입력해주세요"
        onChange={handleChange}
      ></input>
      <input
        value={values.rating}
        name="rating"
        type="number"
        onChange={handleChange}
      ></input>
      <textarea
        value={values.content}
        name="content"
        placeholder="영화내용을 입력해주세요"
        onChange={handleChange}
      ></textarea>
      <button>확인</button>
      {/* 일반적으로 폼 내에서 <button>을 사용하면 이 버튼은 "submit" 유형의 버튼으로 간주되어 폼을 제출 */}
    </form>
  );
}
