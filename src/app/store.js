import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../feature/transaction/transactionsSlice";
import filterReducer from "../feature/filter/filterSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    filter: filterReducer,
  },
  devTools: true,
});
