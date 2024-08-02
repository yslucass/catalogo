// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`


import { useState } from "react";

export default function Home() {
    const [listaProdutos, setProdutos] = useState([
      {id: 1, nome: "Pão Francês", preco: "R$2.50"},
      {id: 2, nome: "Bolo de Cenoura", preco: "R$10.00"},
      {id: 3, nome: "Torta de Frango", preco: "R$15.00"}
    ]);

    const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
      setListaPedidos([...listaPedidos,objeto])
    }
  
      return (
          <div>
              <h1>Cardápio da Padaria</h1>

            {
              listaProdutos.map((produto)=>
                <div key={produto.id}>
                <p>{produto.nome}</p>
                  <p>{produto.preco}</p>
                </div>)
            }
          </div>

        );
      }