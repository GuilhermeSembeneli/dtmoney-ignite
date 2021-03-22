import React from "react";
import IconmeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export default function Summary() {
  const {transactions} = React.useContext(TransactionsContext);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IconmeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeImg} alt="Saidas" />
        </header>
        <strong> - R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  );
}
