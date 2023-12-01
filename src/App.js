import "./App.css";
import { getReviews } from "./api";
import { ReviewForm } from "./components/ReviewForm";
import { ReviewList } from "./components/ReviewList";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  //평점 높은 순으로 정렬하기
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 동적인 속성 접근

  const handleDelete = (id) => {
    const newItmes = items.filter((i) => i.id !== id);
    setItems(newItmes);
  };

  const handleLoad = async (option) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getReviews(option);
    } catch (e) {
      setLoadingError(e);
      return; //꼭 해주기
    } finally {
      setIsLoading(false);
    }
    const { reviews, paging } = result;
    if (option.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(option.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  useEffect(() => {
    handleLoad({ order, offset, limit: 6 });
  }, [order]);

  return (
    <>
      <ReviewForm
        onSuccess={(review) => setItems((prev) => [review, ...prev])} //비동기로 일어나서 setter 함수를 콜백형태로 사용
      ></ReviewForm>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("rating")}>평점순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete}></ReviewList>
      {hasNext && (
        <button
          disabled={isLoading}
          onClick={() => handleLoad({ order, offset, limit: 6 })}
        >
          더보기
        </button>
      )}
      {loadingError?.message && <p>{loadingError.message}</p>}
    </>
  );
}

export default App;
