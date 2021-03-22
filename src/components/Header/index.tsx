import React from "react";
import logoImg from "../../assets/logo.svg";
import { HeaderProps } from "../../interfaces";
import { Container, Content } from "./styles";



export function Header({onOpenNewTransactionModal}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
