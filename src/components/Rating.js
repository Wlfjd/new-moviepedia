import "./Rating.css";

const RATING = [1, 2, 3, 4, 5];

function Star({ selected = false }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;
  return <span className={className}>★</span>;
}

export function Rating({ value }) {
  return (
    <div>
      {RATING.map((item) => (
        <Star key={item} value={item} selected={value >= item}></Star>
      ))}
    </div>
  );
}
