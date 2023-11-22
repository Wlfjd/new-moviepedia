import "./App.css";
import { ReviewList } from "./components/ReviewList";
import items from "./mock.json";

function App() {
  return <ReviewList items={items}></ReviewList>;
}

export default App;
