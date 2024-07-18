import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../feature/filter/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <div className="mb-4">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={`p-2 mr-2 rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-500 text-white"
        }`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("income"))}
        className={`p-2 mr-2 rounded ${
          filter === "income"
            ? "bg-blue-500 text-white"
            : "bg-gray-500 text-white"
        }`}
      >
        Income
      </button>
      <button
        onClick={() => dispatch(setFilter("expense"))}
        className={`p-2 rounded ${
          filter === "expense"
            ? "bg-blue-500 text-white"
            : "bg-gray-500 text-white"
        }`}
      >
        Expense
      </button>
    </div>
  );
};
