import React from "react";

const Card = ({ children, height, width }) => {
  return (
    <div
      className="bg-card shadow-card rounded-[10px]"
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
