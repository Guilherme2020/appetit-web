import React, { useState } from "react";
import Aside from "../../components/Sidebar";
import Itens from "../../components/Itens";
import { Container } from "./styles";
import back from "../../assets/back.png";
import ilustration from "../../assets/Illustration.png";
import cuscuzSimples from "../../assets/cuscuzsimples.svg";
import cuscuzCompleto from "../../assets/cuscuzcompleto.svg";

import FormatNumber from "../../utils/FormatNumber";

const productsList = [
  {
    id: 1,
    name: "Cuzcuz Simples",
    price: 2.25,
    imgIten: cuscuzSimples,
    options: [
      {
        id: 1,
        name: "milho",
      },
      {
        id: 2,
        name: "arroz",
      },
    ],
  },
  {
    id: 2,
    name: "Cuzcuz Completo",
    price: 2.25,
    imgIten: cuscuzCompleto,
    options: [
      {
        id: 1,
        name: "milho",
      },
      {
        id: 2,
        name: "arroz",
      },
    ],
  },
];

export default function SelectProduct() {
  const [products, setProducts] = useState(productsList);
  const [increment, setIncrement] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const [itemDetail, setItemDetail] = useState({});
  const [option, setOption] = useState("");
  const [observation, setObservation] = useState("");
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    // itemDetail.price, increment, itemDetail.name,itemDetail.img
    const formatIten = {
      id: item.id,
      observation,
      price: item.price,
      name: item.name,
      qnt: increment,
      img: item.imgIten,
    };

    setCart([...cart, formatIten]);
    setShowDetail(false);
    setIncrement(1);
    setObservation("");
    setOption("");
  };

  const calcItensCart = (cart) => {
    let total = 0;
    cart.map((c) => {
      total += c.qnt * c.price;
    });
    return FormatNumber(total);
    // return Intl.NumberFormat("pt-BR", {
    //   style: "currency",
    //   currency: "BRL",
    // }).format(total);
  };

  const renderDetail = (item) => {
    setItemDetail(item);
    setShowDetail(true);
  };
  const amountIten = (price, increment) => {
    const amount = price * increment;
    return amount;
  };
  function renderItens() {
    return products.map((item, index) => (
      <Itens cart={cart} item={item} renderDetail={() => renderDetail(item)} />
    ));
  }
  const decrementIten = () => {
    if (increment > 1) {
      setIncrement(increment - 1);
    }
  };
  const incrementIten = () => {
    setIncrement(increment + 1);
  };

  return (
    <Container>
      <Aside />
      {showDetail && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "-1%",
          }}
        >
          <div
            style={{
              width: "100%",
              paddingLeft: "26%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: 106,
                width: "89%",
                marginTop: "3%",
              }}
            >
              <img src={back} alt="back" />
              <p>Novo Pedido</p>
              <hr />
            </div>
            <div>
              <img src={ilustration} alt="Ilustration" />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              background: "#FAFAFA",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>Detalhes do Pedido</p>

            <p>
              Aproveite para adicionar alguma observação para este pedido, caso
              queira.
            </p>

            <div>
              <img src={itemDetail && itemDetail.imgIten} alt="img iten" />
              {itemDetail && itemDetail.name}
              {itemDetail && itemDetail.price}
            </div>
            <p>Opções</p>
            <p>Escolha dentre as opções de massas abaixo.</p>
            {itemDetail &&
              itemDetail.options.map((option) => (
                <div key={option.id}>
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="name"
                      onChange={(e) => setOption(e.target.value)}
                      value={option.name}
                    />
                    <label>{option.name}</label>
                  </div>
                </div>
              ))}
            <p>Observações</p>
            <input
              type="text"
              onChange={(e) => setObservation(e.target.value)}
            />

            {option && (
              <div>
                <div>
                  <button onClick={() => decrementIten()}>-</button>
                  {increment}
                  <button onClick={() => incrementIten()}>+</button>
                </div>

                <div>
                  <button onClick={() => addCart(itemDetail)}>
                    Adicionar R${amountIten(itemDetail.price, increment)}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!showDetail && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "-1%",
          }}
        >
          <div
            style={{
              width: "100%",
              paddingLeft: "26%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: 106,
                width: "89%",
                marginTop: "3%",
              }}
            >
              <img src={back} alt="back" />
              <p>Novo Pedido</p>
              <hr />
            </div>
            <div>
              <img src={ilustration} alt="Ilustration" />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              background: "#FAFAFA",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "100%", marginTop: "5%" }}>
              <h1
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textAlign: "left",
                  fontSize: 24,
                  marginLeft: "5%",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Informações do Pedido
              </h1>
            </div>
            <hr />
            <div style={{ width: "100%" }}>
              <p style={{ marginLeft: "5%" }} className="text-info">
                Preencha as informações abaixo para concluir esta venda.
              </p>
            </div>

            <p>Component de progress </p>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 16,
                  marginLeft: "5%",
                  color: "rgba(0,0,0, 0.88)",
                }}
              >
                O que você está vendendo?
              </p>
            </div>

            {renderItens()}
            {calcItensCart(cart)}
          </div>
        </div>
      )}
    </Container>
  );
}
