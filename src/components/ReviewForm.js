import { useState } from "react";
import "./ReviewForm.css";
import { FileInput } from "./FileInput";

export function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    handleChange(e.target.name, e.target.value); //file input은 e.target.value가 아닌 e.target.files[0]를 사용해야하기 때문에 구분지어 만들어줘야 함
  };

  return (
    <form
      className="ReviewForm"
      onSubmit={(e) => {
        console.log(values);
        e.preventDefault();
      }}
    >
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      ></FileInput>
      <input
        name="title"
        value={values.title}
        placeholder="영화제목을 입력해주세요"
        onChange={handleInputChange}
      ></input>
      <input
        name="rating"
        value={values.rating}
        type="number"
        onChange={handleInputChange}
      ></input>
      <textarea
        name="content"
        value={values.content}
        placeholder="영화내용을 입력해주세요"
        onChange={handleInputChange}
      ></textarea>

      <button>확인</button>
      {/* 일반적으로 폼 내에서 <button>을 사용하면 이 버튼은 "submit" 유형의 버튼으로 간주되어 폼을 제출 */}
    </form>
  );
}
