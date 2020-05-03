import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Aside from "../../components/Sidebar";
import Header from "../../components/Header";
import Clients from "../../components/Clients";
import back from "../../assets/back.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Line } from "rc-progress";
import CalcItensCart from "../../utils/AmountCart";
import FormatNumber from "../../utils/FormatNumber";

export default function StatusPayment() {
  const [clientsChoise, setClientsChoise] = useState([]);
  const [productsChoise, setProductsChoise] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    const productsStore = localStorage.getItem("cart");
    const productsParse = JSON.parse(productsStore);
    const clientsStore = localStorage.getItem("clients");
    const clientsParse = JSON.parse(clientsStore);
    setProductsChoise(productsParse);
    setClientsChoise(clientsParse);
  };
  return (
    <Container>
      <Aside />
      <div className="content-product">
        <div className="content-new-order">
          <div className="content-order">
            <Link to="select-product">
              <img src={back} alt="back" />
            </Link>
            <h3>Novo Pedido</h3>
            <div />
          </div>
          <div className="content-title-product">
            <h1>Produtos</h1>
            {productsChoise.map((i) => (
              <>
                <div key={i.id}>
                  <div className="content-product-choise">
                    <img src={i.img} alt="avatar" />
                    <p className="product-choise-name">{i.name}</p>
                    <p className="product-choise-price">
                      {FormatNumber(i.price)}
                    </p>
                  </div>

                  <p className="product-choise-observation">{i.observation}</p>
                </div>
              </>
            ))}
          </div>
          <div className="line-separator" />
          <div className="amount-products">
            <p className>Total</p>

            <p className="amount">{CalcItensCart(productsChoise)}</p>
          </div>
        </div>
        <div className="content-description-order" style={{ height: 768 }}>
          <Header />
          <div className="content-info-order">
            <h1>Informações para o Pedido</h1>
            <div className="line-content" />
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ paddingLeft: "5%" }} className="text-info">
              Preencha as informações abaixo para concluir esta venda.
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ marginLeft: "5%" }} className="text-step">
              Passo 3 de 3
            </p>
          </div>
          <Line
            percent="100"
            style={{ width: "90%" }}
            strokeWidth="3"
            strokeColor="#ff8822"
            trailWidth={3}
            trailColor={"#E6E6E6"}
          />

          <div style={{ width: "100%" }}>
            <p
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 16,
                paddingLeft: "5%",
                color: "rgba(0,0,0, 0.88)",
              }}
            >
              Qual o status de pagamento?
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
