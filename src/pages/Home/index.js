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
          <hr></hr>
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

        <div className="orders">
          <div style={{ width: "100%" }}>
            <p style={{ fontFamily: "Open Sans", textAlign: "left" }}>
              {" "}
              <span
                style={{
                  fontWeight: 600,
                  fontFamily: "Open Sans",
                  fontSize: 16,
                }}
              >
                13/05/2019,{" "}
              </span>
              Você vendeu{" "}
              <span
                style={{
                  fontWeight: 600,
                  fontFamily: "Open Sans",
                  fontSize: 16,
                }}
              >
                R$ 45,80
              </span>
            </p>
          </div>
          <Link to="detail-order">
            <div className="card">
              <div className="user">
                <img src={user} alt="user avatar" />
              </div>
              <div className="content-card">
                <div className="info-user">
                  <p className="user-name">Marcel Batista</p>
                  <p className="price-order">R$ 3,50</p>
                </div>
                <div>
                  <p style={{ lineHeight: 0 }} className="info-order">
                    cucuz com calabresa suco de laranja
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="detail-order">
            <div className="card">
              <div className="user">
                <img src={user} alt="user avatar" />
              </div>
              <div className="content-card">
                <div className="info-user">
                  <p className="user-name">Marcel Batista</p>
                  <p className="price-order">R$ 3,50</p>
                </div>
                <div>
                  <p style={{ lineHeight: 0 }} className="info-order">
                    cucuz com calabresa suco de laranja
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
}
