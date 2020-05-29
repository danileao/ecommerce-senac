import React, { useState, useCallback } from "react";

import { Container, Form, Input, Textarea, Button } from "./styles";

function Cadastro() {
  const initialValue = {
    sku: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  };

  const [product, setProduct] = useState(initialValue);
  const [products, setProducts] = useState([]);
  const [messageError, setMessageError] = useState(null);

  const handleKeyUp = useCallback((e) => {
    if (e) {
      console.log("keyup", e.target.value);
      let value;
      value = e.target.value;
      // \D => Tudo o que não for numerico
      // g => Procurar em todo conteudo, mesmo que ache, continue!
      // \b
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d)(\d{2})$/, "$1,$2");
      // 1.333.999,00
      value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
      e.target.value = value;
      // setProduct({
      //   ...product,
      //   price: value,
      // });
    }
  }, []);

  const handleChange = useCallback(
    (e) => {
      console.log("change", e.target.value);
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    },
    [product]
  );

  const validation = useCallback(() => {
    if (products.find((prod) => prod.sku === product.sku)) {
      setMessageError("SKU já cadastrado!");
      return false;
    }
    if (
      !product.price ||
      !product.quantity ||
      !product.sku ||
      !product.description ||
      !product.image
    ) {
      setMessageError("Algum campo está vazio!");
      return false;
    }

    setMessageError("");
    return true;
  }, [
    product.description,
    product.image,
    product.price,
    product.quantity,
    product.sku,
    products,
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!validation()) {
        return;
      }

      const prods = [...products, product];
      setProducts(prods);

      localStorage.setItem("produtos", JSON.stringify(prods));
      console.log(products);
    },
    [product, products, validation]
  );

  return (
    <Container>
      <h3>Cadastro</h3>

      {messageError && <span>{messageError}</span>}

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="SKU"
          onChange={handleChange}
          name="sku"
          value={product.sku}
        />
        <Input
          placeholder="Nome do Produto"
          onChange={handleChange}
          name="name"
          value={product.name}
        />
        <Textarea
          placeholder="Descrição"
          onChange={handleChange}
          name="description"
          value={product.description}
        ></Textarea>
        <Input
          placeholder="Preço de Venda"
          // onKeyUp={handleKeyUp}
          onChange={(e) => {
            handleKeyUp(e);
            handleChange(e);
          }}
          name="price"
          value={product.price}
        />
        <Input
          placeholder="Quantidade"
          onChange={handleChange}
          name="quantity"
          type="number"
          value={product.quantity}
        />
        <Input
          placeholder="Imagem"
          onChange={handleChange}
          name="image"
          value={product.image}
        />

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default Cadastro;
