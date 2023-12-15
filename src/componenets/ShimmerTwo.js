import React from "react";

const ShimmerTwo = () => {
  const shimmerItems = new Array(19).fill(null);
  return (
    <div className="Body min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <span className="animate-shimmer-container m-2 mt-4 w-96 h-10 rounded-md">
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
        </span>
        <span className="animate-shimmer-container mt-3 w-20 ml-4 h-10 rounded-md">
          {" "}
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
        </span>
        <span className="animate-shimmer-container mt-1 w-28 ml-4 h-10 rounded-md">
          {" "}
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
        </span>
      </div>

      {shimmerItems.map((_, index) => (
        <div key={index} className="animate-shimmer-container m-4 mt-9 h-28">
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
          <div className="animate-shimmer-line"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerTwo;
