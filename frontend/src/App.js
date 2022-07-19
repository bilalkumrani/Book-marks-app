import Item from "./components/Item";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/all").then((result) => {
      setItems(result.data);
    });
  }, []);
  return (
    <div style={{ margin: "4rem" }}>
      <div style={{ marginBottom: "25px" }}>Favorites</div>
      {items.map((item) => {
        return <Item item={item} />;
      })}
      <div style={{ marginTop: "25px" }}>Frequently Visited</div>
    </div>
  );
}

export default App;
