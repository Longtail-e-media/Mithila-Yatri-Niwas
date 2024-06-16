import React from "react";

const SkeletonLoader = () => {
  return (
    <>
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-black/50 rounded w-1/3 mx-auto"></div>
        <div className="h-4 bg-black/50 rounded w-2/3 mx-auto"></div>
        <div className="h-4 bg-black/50 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-black/50 rounded w-5/6 mx-auto"></div>
        <div className="h-4 bg-black/50 rounded w-full mx-auto"></div>
        <div className="h-4 bg-black/50 rounded w-4/5 mx-auto"></div>
        <div className="h-4 bg-black/50 rounded w-3/5 mx-auto"></div>
      </div>
    </>
  );
};

export default SkeletonLoader;
