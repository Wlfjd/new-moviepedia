import "./Rating.css";

const RATING = [1, 2, 3, 4, 5];

function Star({ selected = false, rating, onSelect, onHover }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;

  const handleClick = onSelect ? () => onSelect(rating) : undefined;
  const handleHover = onHover ? () => onHover(rating) : undefined;
  return (
    <span className={className} onClick={handleClick} onMouseOver={handleHover}>
      ★
    </span>
  );
}

export function Rating({ value, onSelect, onHover, onMouseOut, className }) {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATING.map((item) => (
        <Star
          key={item}
          selected={value >= item}
          rating={item}
          onSelect={onSelect}
          onHover={onHover}
        ></Star>
      ))}
    </div>
  );
}
