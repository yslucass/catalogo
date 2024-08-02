// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

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
                            </div>)
                        }
                      </div>

                    );
                  }