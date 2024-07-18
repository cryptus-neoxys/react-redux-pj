import React from "react";
import { useSelector } from "react-redux";

export const Summary = () => {
  const transactions = useSelector((state) => state.transactions);
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="p-4 mt-4 bg-gray-200 rounded">
      <h2 className="mb-2 text-xl font-bold">Summary</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};
