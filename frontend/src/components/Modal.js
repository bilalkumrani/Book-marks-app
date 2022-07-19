import React from "react";
import { useState } from "react";
import axios from "axios";

const Modal = (props) => {
  const [data, setData] = useState({
    name: "",
    link: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:4000/add", data).then((res) => {
      console.log(res);
      props.setShowModal(false);
      window.location.reload();
    });
  };
  return (
    <div style={{ width: "20rem" }}>
      <div className="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="form-group">
        <label>Link</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter link"
          onChange={handleChange}
          name="link"
        />
      </div>
      <div className="form-group form-check"></div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default Modal;
