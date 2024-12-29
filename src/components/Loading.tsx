import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <span className="loading loading-infinity loading-lg text-blue-500"></span>
    </div>
  );
};

export default Loading;
