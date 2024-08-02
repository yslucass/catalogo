// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

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