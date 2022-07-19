import React from "react";

const Item = (props) => {
  const { name, link, freq, _id } = props.item;
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        borderRadius: "25px",
      }}
    >
      <a
        href={`/${link}`}
        target="blank"
        style={{ alignSelf: "center", fontSize: "3rem", display: "flex" }}
      >
        {name[0]}
      </a>
    </div>
  );
};

export default Item;
