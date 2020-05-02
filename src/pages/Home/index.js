import React, { useState, useEffect } from "react";
import Aside from "../../components/Sidebar";
import Orders from "../../components/Orders";
import api from "../../services/orders/api";
import { Link } from "react-router-dom";
import more from "../../assets/more.svg";
import { Container } from "./styles";

export default function Home() {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    onFetchData();
  }, []);
  const onFetchData = async () => {
    try {
      let response = await api.fetchData();
      setOrders(response);
    } catch (e) {
      console.log(e);
    }
  };

  const renderOrders = () => {
    return orders.map((item) => <Orders key={item.id} item={item} />);
  };

  return (
    <>
      <Container>
        <Aside />
        <section>
          <div className="content-user">
            <p>Olá, Vanusa!</p>
          </div>

          <div className="make-order">
            <Link to="/select-product">
              <div>
                <img src={more} alt="more" />
                <p>Fazer Novo Pedido</p>
              </div>
            </Link>

            <div />
          </div>
          {renderOrders()}
        </section>
      </Container>
    </>
  );
}
