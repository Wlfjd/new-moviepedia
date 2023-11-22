import "./App.css";
import { ReviewList } from "./components/ReviewList";
import mockItems from "./mock.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);
  //평점 높은 순으로 정렬하기
  const [order, setOrder] = useState("");
  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 동적인 속성 접근

  const handleDelete = (id) => {
    const newItmes = items.filter((i) => i.id !== id);
    setItems(newItmes);
  };
  return (
    <>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("rating")}>평점순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete}></ReviewList>
    </>
  );
}

export default App;
