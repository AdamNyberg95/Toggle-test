import React from "react";
import "./card.css";
import SignUp from "../Buttons/Button/Button";

export default function ({ price, storage, users, send, title }) {
  return (
    <div className="container">
      <div className="smallContainer">
        <div className="box" style={{ fontSize: "25px" }}>
          {title}
        </div>
        <div className="box" style={{ fontSize: "45px" }}>
          {price}
        </div>
      </div>
      <div className="info">
        <hr class="solid"></hr>
        <div className="box">{storage}</div>
        <hr class="solid"></hr>
        <div className="box">{users}</div>
        <hr class="solid"></hr>
        <div className="box">{send}</div>
        <hr class="solid"></hr>
      </div>
      <SignUp />
    </div>
  );
}
