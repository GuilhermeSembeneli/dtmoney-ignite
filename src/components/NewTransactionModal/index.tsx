import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import React from "react";
import { NewTransactionModalProps } from "../../interfaces";
import { TransactionsContext } from "../../TransactionsContext";


export default function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const {createTransaction} = React.useContext(TransactionsContext)
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [type, setType] = React.useState("deposit");


  function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();
    createTransaction({
      title,
      amount,
      category,
      type,
    });
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar imagem" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={({ target }) => setAmount(Number(target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
