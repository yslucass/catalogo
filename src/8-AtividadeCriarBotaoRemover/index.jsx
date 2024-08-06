// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".
import Header from "./components/Header";

import Footer from "./components/Footer";

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

      const removerPedido = (id) => {
        let remover = false;
        let listaAux = listaPedidos.filter((produto) => {
          if(remover == false) {
            if(produto.id == id) {
              return produto
            } else {
              remover = true;
              return null
            }
          } else {
            return produto
          }
        });
        setListaPedidos(listaAux);
      }

        return (
            <div>
                <h1>Cardápio da Padaria</h1>
                
              {
                listaProdutos.map((produto)=>
                  <div key={produto.id}>
                  <p>{produto.nome}</p>
                    <p>{produto.preco}</p>
                    <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
                  </div>)
              }
              {
                listaPedidos.map((produto) =>
                  <div key={produto.id}>
                  <p>{produto.nome}</p>
                  <p>{produto.preco}</p>
                    <button onClick={() => removerPedido(produto.id)}>Remover</button>
                  </div>)
              }
            </div>
          );
        }