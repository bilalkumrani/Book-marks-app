import axios from "axios";
import React from "react";

const RemoveModal = (props) => {
  const handleRemove = () => {
    axios.post("http://localhost:4000/remove", props.item).then((res) => {
      console.log(res);
      props.showRemoveModal(false);
      window.location.reload();
    });
  };
  return (
    <div style={{ width: "20rem" }}>
      <div className="form-group">
        <label>Are you sure you want to delete this Item ?</label>
      </div>
      <div className="form-group form-check"></div>
      <button type="submit" className="btn btn-danger" onClick={handleRemove}>
        Remove
      </button>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => window.location.reload()}
      >
        Cancel
      </button>
    </div>
  );
};

export default RemoveModal;
