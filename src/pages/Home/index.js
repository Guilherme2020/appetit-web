import React, { useState, useEffect } from "react";
import Aside from "../../components/Sidebar";
import Orders from "../../components/Orders";
import api from "../../services/orders/api";
import { Link } from "react-router-dom";
import more from "../../assets/more.svg";
import avatartNav from "../../assets/avatar-navbar.svg";
import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sales] = useState([]);
  const [orders, setOrders] = useState([]);
  const onFetchData = async () => {
    try {
      let response = await api.fetchData();
      setOrders(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onFetchData();
  }, []);

  const renderOrders = () => {
    return orders.map((item) => <Orders key={item.id} item={item} />);
  };

  const searchFilterFunction = (text) => {
    setSearch(text);

    let _orders = orders;

    console.log(sales);
    const newData = orders.filter((item) => {
      const itemData = `${item.dateSale.toUpperCase()} ${item.dateSale.toUpperCase()} ${item.dateSale.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    console.log(newData);
    setOrders(newData);
    if (text.length === 0) {
      setOrders(_orders);
    }
  };

  return (
    <>
      <Container>
        <Aside />
        {/* <Header /> */}
        <div className="container-header">
          <div>
            <img src={avatartNav} alt="" />
          </div>
        </div>
        <section>
          <div className="content-user">
            <p>Olá, Vanusa!</p>
          </div>
          <div className="divisor" />
          <div className="make-order">
            <Link to="/select-product">
              <div>
                <img src={more} alt="more" />
                <p>Fazer Novo Pedido</p>
              </div>
            </Link>

            <div />
          </div>
          <div className="container-input">
            <AiOutlineSearch
              style={{ marginTop: "2%" }}
              color="#ff8822"
              size={23}
            />

            <div className="label-float">
              <input
                type="text"
                onChange={(e) => searchFilterFunction(e.target.value)}
                value={search}
                placeholder=" "
              />

              <label>Procure o pedido aqui...</label>
            </div>
          </div>
          {renderOrders()}
        </section>
      </Container>
    </>
  );
}
