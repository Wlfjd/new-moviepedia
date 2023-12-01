import { useState } from "react";
import "./ReviewForm.css";
import { FileInput } from "./FileInput";
import { RatingInput } from "./RatingInput";
import { createReview } from "../api";

const INITIAL = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null, //파일객체이기 때문에 null로 초깃값 지정
};
export function ReviewForm({ onSuccess }) {
  const [values, setValues] = useState(INITIAL);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    handleChange(e.target.name, e.target.value); //file input은 e.target.value가 아닌 e.target.files[0]를 사용해야하기 때문에 구분지어 만들어줘야 함
  };

  return (
    <form
      className="ReviewForm"
      onSubmit={async (e) => {
        console.log(values);
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("rating", values.rating);
        formData.append("content", values.content);
        formData.append("imgFile", values.imgFile);

        let result;
        try {
          setIsError(null);
          setIsLoading(true);
          result = await createReview(formData);
        } catch (error) {
          setIsError(error);
          return;
        } finally {
          setIsLoading(false);
        }
        setValues(INITIAL);
        const { review } = result;
        onSuccess(review);
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
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      ></RatingInput>
      <textarea
        name="content"
        value={values.content}
        placeholder="영화내용을 입력해주세요"
        onChange={handleInputChange}
      ></textarea>

      <button disabled={isLoading}>확인</button>
      {isError?.message && <p>{isError.message}</p>}
      {/* 일반적으로 폼 내에서 <button>을 사용하면 이 버튼은 "submit" 유형의 버튼으로 간주되어 폼을 제출 */}
    </form>
  );
}
