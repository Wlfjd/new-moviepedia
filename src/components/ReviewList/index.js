import "./index.css";

import { useState } from "react";

import { Rating } from "../Rating";
import { ReviewForm } from "../ReviewForm";

function ReviewListItem({ item, onDelete, onEdit }) {
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt="img"></img>
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating}></Rating>
        <p>{item.content}</p>
      </div>
      <button onClick={() => onDelete(item.id)}>삭제</button>
      <button onClick={() => onEdit(item.id)}> 수정 </button>
    </div>
  );
}

export function ReviewList({ items, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { title, rating, content } = item;
          const initalValues = { title, rating, content };
          return (
            <li key={item.id}>
              <ReviewForm
                initalValues={initalValues}
                onCancel={() => setEditingId(null)}
              ></ReviewForm>
            </li>
          );
        }
        return (
          // 배열 인덱스는 키로 사용 불가, 고유한 id를 사용해야함
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            ></ReviewListItem>
          </li>
        );
      })}
    </ul>
  );
}
