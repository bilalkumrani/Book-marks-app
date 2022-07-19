import Item from "./components/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import AddItem from "./components/AddItem";
import Modal from "./components/Modal";
import RemoveModal from "./components/RemoveModal";

function App() {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [removeItem, setRemoveItem] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/all").then((result) => {
      setItems(result.data);
    });
  }, []);
  const handleAddDoubleClick = () => {
    setShowModal(true);
  };
  const handleDeleteClick = (item) => {
    setShowRemoveModal(true);
    setRemoveItem(item);
  };

  return (
    <div style={{ margin: "4rem" }}>
      <div style={{ marginBottom: "25px" }}>Favorites</div>
      <span style={{ float: "right" }}>
        {showAll ? "Show All ^" : "Show Less ^"}
      </span>
      {showRemoveModal ? (
        <RemoveModal showRemoveModal={setShowRemoveModal} item={removeItem} />
      ) : (
        items.map((item) => {
          return (
            <span
              onDoubleClick={() => {
                handleDeleteClick(item);
              }}
              key={item._id}
            >
              <Item item={item} />
            </span>
          );
        })
      )}

      {showModal ? (
        <Modal setShowModal={setShowAll} />
      ) : (
        <span onDoubleClick={handleAddDoubleClick}>
          {" "}
          <AddItem />
        </span>
      )}
      <div style={{ marginTop: "25px" }}>Frequently Visited</div>
    </div>
  );
}

export default App;
