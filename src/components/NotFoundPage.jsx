import React from "react";
import notFound from "../assets/notFoundImage.png";
import "./notFound.css";

function NotFoundPage() {
  return (
    <div className="notFound">
      <img src={notFound} alt="Not Found Page" />
    </div>
  );
}

export default NotFoundPage;
