import React from "react";
import {
  Transaction,
  TransactionInput,
  TransactionsContextData,
} from "../interfaces";
import { api } from "../services/api";

interface TransactionsProviderProps {
  children: React.ReactNode;
}

//criando um contexto                                //temos que passar a tipagem que será usada
const TransactionsContext = React.createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions)); //dentro de data é que fica os nossos dados
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}


export function useTransactions() {
  const context = React.useContext(TransactionsContext)
  return context
}