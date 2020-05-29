import React, { useEffect, useState, useCallback } from "react";

function Listagem() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const prods = JSON.parse(localStorage.getItem("produtos"));
    console.log(prods);
    setProdutos(prods);
  }, []);

  const visualizarDetalhes = useCallback((produto) => {
    console.log(produto);
  }, []);

  return (
    <div>
      <h2>Listagem de Produtos</h2>

      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Nome</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.sku}>
              <td>{produto.sku}</td>
              <td>{produto.name}</td>
              <td>{produto.price}</td>
              <td>
                <button onClick={() => visualizarDetalhes(produto)}>
                  Visualizar detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listagem;
