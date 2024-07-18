import { createSlice } from "@reduxjs/toolkit";

// export const TRANSACTION_ACTIONS = {
//   add: "ADD",
//   delete: "DELETE",
// };

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      return state.filter((txn) => txn.id !== action.payload);
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
