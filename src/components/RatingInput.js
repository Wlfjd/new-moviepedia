import { useState } from "react";
import { Rating } from "./Rating";
import "./RatingInput.css";

export function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);
  const handleSelect = (nextValue) => onChange(name, nextValue);
  const handleMouseOut = () => {
    setRating(value); //다시 기존 선택 상태로
  };

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    ></Rating>
  );
}
