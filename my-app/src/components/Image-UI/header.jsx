import React from "react";
import sleep from "./sleep2.png";
import "./style.scss";

export default function ImageUI() {
  return (
    <div className="imageUI">
      <h2>Daily Sleep patterns</h2>

      <img src={sleep} />
    </div>
  );
}
