import { useEffect, useRef } from "react";

export function FileInput({ name, value, onChange }) {
  const inputRef = useRef(); //실제 Dom 노드 참조
  const handleChange = (e) => {
    onChange(name, e.target.files[0]);
  };

  const handleClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      onChange(name, null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef}></input>
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}
