import React from "react";

const LoadButton = ({ className = "", data, ...props }) => {
  return (
    <button className={`load-btn ${className}`} {...props}>
      {data} <i className="fa-solid ml-2 fa-arrow-right"></i>
    </button>
  );
};

export default LoadButton;
