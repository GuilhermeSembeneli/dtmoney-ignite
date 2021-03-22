import React from "react";
import {
  Transaction,
  TransactionInput,
  TransactionsContextData,
} from "./interfaces";
import { api } from "./services/api";

interface TransactionsProviderProps {
  children: React.ReactNode;
}

//criando um contexto                                //temos que passar a tipagem que será usada
export const TransactionsContext = React.createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions)); //dentro de data é que fica os nossos dados
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
