import React from "react";

const AddItem = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "2px solid black",
        display: "inline-flex",
        justifyContent: "center",
        borderRadius: "25px",
        flexDirection: "row",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <a style={{ alignSelf: "center", fontSize: "3rem" }}>+</a>
    </div>
  );
};

export default AddItem;
