import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Aside from "../../components/Sidebar";
import Header from "../../components/Header";
import Clients from "../../components/Clients";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import arrow from "../../assets/arrow-right.svg";
import avatar1 from "../../assets/avatar1.svg";
import avatar2 from "../../assets/avatar2.svg";
import avatar3 from "../../assets/avatar3.svg";
import avatar4 from "../../assets/avatar4.svg";
import avatar5 from "../../assets/avatar5.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Line } from "rc-progress";
import CalcItensCart from "../../utils/AmountCart";
import FormatNumber from "../../utils/FormatNumber";

const listClients = [
  {
    id: 1,
    name: "Justine Marshall",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Bairam Frootan",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Tua Manuera",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Justine Marshall",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Bairam Frootan",
    avatar: avatar5,
  },
];

export default function SelectClients() {
  const [clients, setClients] = useState(listClients);
  const [search, setSearch] = useState("");
  const [clientsChoise, setClientsChoise] = useState([]);
  const [productsChoise, setProductsChoise] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    const productsStore = localStorage.getItem("cart");
    const productsParse = JSON.parse(productsStore);
    setProductsChoise(productsParse);
  };
  const addClient = (item) => {
    const formatIten = {
      id: item.id,
      name: item.name,
      avatar: item.avatar,
    };
    const findClient = clientsChoise.find((i) => i.id === formatIten.id);
    if (!findClient) {
      setClientsChoise([...clientsChoise, formatIten]);
    } else {
      const filterClientChoise = clientsChoise.filter(
        (i) => i.id !== formatIten.id
      );
      setClientsChoise(filterClientChoise);
    }
  };

  function renderItens() {
    return clients.map((item) => (
      <Clients
        key={item.id}
        clients={clientsChoise}
        item={item}
        select={() => addClient(item)}
      />
    ));
  }
  const saveClients = () => {
    localStorage.setItem("clients", JSON.stringify(clientsChoise));
  };
  const renderClientsChoise = () => {
    if (clientsChoise.length > 0) {
      return (
        <div className="clients-content">
          <p>
            {clientsChoise.length}{" "}
            {clientsChoise.length > 1 ? "clientes" : "cliente"}{" "}
            {clientsChoise.length > 1 ? "selecionados" : "selecionado"}
          </p>

          <Link onClick={() => saveClients()} to="status">
            <div>
              <p>Avançar</p>
              <img src={arrow} alt="avançar" />
            </div>
          </Link>
        </div>
      );
    }
  };
  const searchFilterFunction = (text) => {
    setSearch(text);

    const newData = clients.filter((item) => {
      const itemData = `${item.name.toUpperCase()} ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setClients(newData);
    if (text.length === 0) {
      setClients(listClients);
    }
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
            ))}
          </div>
          <div className="line-separator" />
          <div className="amount-products">
            <p>Total</p>

            <p className="amount">{CalcItensCart(productsChoise)}</p>
          </div>
        </div>
        <div className="content-description-order" style={{ height: 868 }}>
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
              Passo 2 de 3
            </p>
          </div>
          <Line
            percent="66"
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
              Para quem você está vendendo?
            </p>
          </div>
          <div style={{ width: "91%", display: "flex", alignItems: "center" }}>
            <AiOutlineSearch
              style={{ marginTop: "3%" }}
              color="#ff8822"
              size={23}
            />

            <div className="label-float">
              <input
                type="text"
                placeholder=" "
                onChange={(e) => searchFilterFunction(e.target.value)}
                value={search}
              />

              <label>Procure o Cliente aqui...</label>
            </div>
          </div>
          {renderItens()}
          {renderClientsChoise()}
        </div>
      </div>
    </Container>
  );
}
