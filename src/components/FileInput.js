import { useEffect, useRef, useState } from "react";

export function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
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

  useEffect(() => {
    if (value) {
      //ObjectURL (사이드 이펙트)
      const newPreview = URL.createObjectURL(value);
      setPreview(newPreview);
      return () => {
        setPreview();
        //ObjectURL 해제
        URL.revokeObjectURL(newPreview);
      };
    }
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기"></img>
      <input type="file" onChange={handleChange} ref={inputRef}></input>
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}
