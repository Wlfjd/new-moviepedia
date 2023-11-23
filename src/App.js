import "./App.css";
import { getReviews } from "./api";
import { ReviewList } from "./components/ReviewList";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  //평점 높은 순으로 정렬하기
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 동적인 속성 접근

  const handleDelete = (id) => {
    const newItmes = items.filter((i) => i.id !== id);
    setItems(newItmes);
  };

  const handleLoad = async (option) => {
    const { reviews, paging } = await getReviews(option);
    if (option.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(option.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  useEffect(() => {
    handleLoad({ order, offset, limit: 6 });
  }, [order]);

  return (
    <>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("rating")}>평점순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete}></ReviewList>
      {hasNext && (
        <button onClick={() => handleLoad({ order, offset, limit: 6 })}>
          더보기
        </button>
      )}
    </>
  );
}

export default App;
