// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="card">
        <div className="left">
          <img src={data.photo} alt={data.name} />
        </div>
        <div className="right">
          <h2>{data.name}</h2>
          <h3>{data.phone}</h3>
          <h4>{data.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
