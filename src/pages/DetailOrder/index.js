import React from "react";
import { Container } from "./styles";
import Aside from "../../components/Sidebar";
import launch from "../../assets/launch.png";

export default function DetailOrder() {
  return (
    <Container>
      <Aside />
      <div className="content-user">
        <p>Pedidos de Marcel</p>
        <hr></hr>
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
          </p>
        </div>

        <div className="card">
          <div className="user">
            <img src={launch} alt="user avatar" />
          </div>
          <div className="content-card">
            <div className="info-user">
              <p className="user-name">2x Bolo frito + Café c/ leite</p>
            </div>
            <div>
              <p style={{ lineHeight: 0 }} className="info-order">
                R$ 3,50
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="user">
            <img src={launch} alt="user avatar" />
          </div>
          <div className="content-card">
            <div className="info-user">
              <p className="user-name">2x Bolo frito + Café c/ leite</p>
            </div>
            <div>
              <p style={{ lineHeight: 0 }} className="info-order">
                R$ 3,50
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
