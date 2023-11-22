import "./ReviewList.css";

function ReviewListItem({ item, onDelete }) {
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt="img"></img>
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{item.content}</p>
      </div>
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
}

export function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        // 배열 인덱스는 키로 사용 불가, 고유한 id를 사용해야함
        <li key={item.id}>
          <ReviewListItem item={item} onDelete={onDelete}></ReviewListItem>
        </li>
      ))}
    </ul>
  );
}
