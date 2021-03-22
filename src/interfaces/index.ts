/*--------------------Transactions--------------------*/
export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

//O omit diz que não precisamos passar o id e createdAt
export type TransactionInput = Omit<Transaction, "id" | "createdAt">;

//temos o Pick que temos que passar os campos que queremos
//export type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

/*--------------------Header--------------------*/
export interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

/*--------------------StyleProp--------------------*/
export interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}
