import React, { useState } from "react";
import Aside from "../../components/Sidebar";
import { Link } from "react-router-dom";
import more from "../../assets/more.svg";
import user from "../../assets/user.png";
import { Container } from "./styles";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Container>
        <Aside />
        <div className="content-user">
          <p>Olá, Vanusa!</p>
        </div>

        <div className="make-order">
          <Link to="/">
            <div>
              <img src={more} alt="more" />
              <p>Fazer Novo Pedido</p>
            </div>
          </Link>

          <div />
        </div>

        <div className="orders">
          <div>
            <p>13/05/2019, você vendeu R$ 45,80</p>
            <div className="card">
              <div className="user">
                <img src={user} alt="user avatar" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
