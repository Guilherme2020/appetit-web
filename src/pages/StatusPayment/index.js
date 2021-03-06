import React, { useState, useEffect } from "react";

import { Container, Button } from "./styles";
import Aside from "../../components/Sidebar";
import Header from "../../components/Header";
import Clients from "../../components/Clients";
import back from "../../assets/back.png";
import { Link } from "react-router-dom";
import calendarImage from "../../assets/calendar.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import { Line } from "rc-progress";
import CalcItensCart from "../../utils/AmountCart";
import FormatNumber from "../../utils/FormatNumber";

export default function StatusPayment() {
  const [clientsChoise, setClientsChoise] = useState([]);
  const [productsChoise, setProductsChoise] = useState([]);
  const [date, setDate] = useState(new Date());
  const [dateInput, setDateInput] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [statusPayment, setStatusPayment] = useState("");
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

  const renderClients = () => {
    return clientsChoise.map((i) => (
      <Clients key={i.id} clients={[]} item={i} select={() => null} />
    ));
  };
  const onChangeDate = (date) => {
    setDateInput(formateBrDate(date));
    setDate(date);
    setShowCalendar(false);
  };
  const renderCalendar = () => {
    if (showCalendar) {
      return (
        <div className="container-calendar">
          <Calendar onChange={(date) => onChangeDate(date)} value={date} />
        </div>
      );
    }
  };
  const formateBrDate = (date) => {
    const dateFormate = moment(date).format("DD/MM/YYYY");
    return dateFormate;
  };
  const renderProducts = () => {
    return productsChoise.map((i) => (
      <div key={i.id}>
        <div className="content-product-choise">
          <img src={i.img} alt="avatar" />
          <p className="product-choise-name">{i.name}</p>
          <p className="product-choise-price">{FormatNumber(i.price)}</p>
        </div>

        <p className="product-choise-observation">{i.observation}</p>
      </div>
    ));
  };
  return (
    <Container>
      <Aside />
      <div className="content-product">
        <div className="content-new-order">
          <div className="content-order">
            <Link to="select-clients">
              <img src={back} alt="back" />
            </Link>
            <h3>Novo Pedido</h3>
            <div />
          </div>
          <div className="content-title-product">
            <h1>Produtos</h1>
            {renderProducts()}
          </div>
          <div className="line-separator" />
          <div className="content-title-product">
            <h1>Clientes</h1>
            {renderClients()}
          </div>
          <div style={{ height: 20 }} />
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
          <div className="content-options">
            <div>
              <input
                type="radio"
                id="male"
                name="name"
                onChange={(e) => setStatusPayment(true)}
                value={statusPayment}
              />
              <label>Não está pago</label>
            </div>

            <div style={{}}></div>
          </div>
          <div className="content-options">
            <div>
              <input
                type="radio"
                id="male"
                name="name"
                onChange={(e) => setStatusPayment(true)}
                value={statusPayment}
              />
              <label>Já está pago</label>
            </div>

            <div style={{}}></div>
          </div>
          {renderCalendar()}
          <div className="content-date">
            <h6>Em qual data foi realizado?</h6>
            <div>
              <label
                className="pure-material-textfield-outlined"
                style={{ width: "100%" }}
              >
                <input
                  onClick={() => setShowCalendar(!showCalendar)}
                  placeholder=" "
                  type="text"
                  value={dateInput}
                  onChange={(e) => console.log(e.target.value)}
                />
                <span>Data do pedido</span>
                <div className="calendar-content">
                  <img src={calendarImage} alt="calendar" />
                </div>
              </label>
            </div>
          </div>
          <div className="container-btn-save">
            <Link to="feedback">
              <Button
                disabled={statusPayment && dateInput ? false : true}
                opacity={dateInput && statusPayment ? 1 : 0.5}
              >
                SALVAR
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
