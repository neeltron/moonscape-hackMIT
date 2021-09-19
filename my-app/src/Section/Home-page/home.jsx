import React, { useState } from "react";
import "./home.scss";
import bg from "./home.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link to="/egg">
        <img src={bg} />
      </Link>
    </div>
  );
}
