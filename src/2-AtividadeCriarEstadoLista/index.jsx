// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import {useState} from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    {id: 1, nome: "Pão Francês", preco: "R$2.50"},
    {id: 2, nome: "Bolo de Cenoura", preco: "R$10.00"},
    {id: 3, nome: "Torta de Frango", preco: "R$15.00"}
  ]);

return (
  <div>
      <h1>Cardápio da Padaria</h1>
  </div>
);
}

