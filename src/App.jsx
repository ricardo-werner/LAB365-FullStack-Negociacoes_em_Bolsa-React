import React from "react";
import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { Tabela } from "./components/Tabela";

const App = () => {

  const [valor, setValor] = useState();
  const [quantidade, setQuantidade] = useState();
  const [negociacoes, setNegociacoes] = useState([]);

  const addNegociacao = ({ valor, quantidade, data }) => {
    if (!valor || setValor == 0) {
      return
    } if (!quantidade || setQuantidade == 0) {
      return
    }
    setNegociacoes([...negociacoes, { valor, quantidade, data }]);
  }

  return (
    <div>
      <Header titulo="Negociações em Bolsa" />
      <div className="container">
        <Formulario quandoAdicionar={addNegociacao} />
        <Tabela negociacoes={negociacoes} />
      </div>
    </div>
  );
};

export default App
