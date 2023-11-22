import "./ReviewList.css";

function ReviewListItem({ item }) {
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt="img"></img>
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <ReviewListItem item={item}></ReviewListItem>
        </li>
      ))}
    </ul>
  );
}
