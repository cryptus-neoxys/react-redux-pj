import { useDispatch, useSelector } from "react-redux";

import { TransactionItem } from "./TransactionItem";
import { deleteTransaction } from "../feature/transaction/transactionsSlice";

export const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTxns = transactions.filter(
    (txn) => filter === "all" || txn.type === filter
  );

  return (
    <ul className="space-y-2">
      {filteredTxns.map((txn) => (
        <TransactionItem
          key={txn.id}
          transaction={txn}
          onDelete={() => dispatch(deleteTransaction(txn.id))}
        />
      ))}
    </ul>
  );
};
