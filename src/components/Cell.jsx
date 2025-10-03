import React from "react";

export const Cell = ({ letter, color }) => {
  return (
    <>
      <div
        className={`w-12 h-12 rounded-2xl text-2xl font-bold ${color} flex items-center justify-center m-1 border border-gray-500 hover:border-2`}
      >
        {letter}
      </div>
    </>
  );
};
