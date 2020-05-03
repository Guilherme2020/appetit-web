import React from "react";
import { Container } from "./styles";
import Aside from "../../components/Sidebar";
import launch from "../../assets/launch.png";
import avatartNav from "../../assets/avatar-navbar.svg";
import back from "../../assets/back.png";
import { Link } from "react-router-dom";

export default function DetailOrder(props) {
  console.log(props);

  const renderNameUser = () => {
    const name = props.location.state.someData.name;
    return name;
  };
  const renderDateOrder = () => {
    const date = props.location.state.someData.date;
    return date;
  };
  return (
    <Container>
      <Aside />
      <div className="container-header">
        <div>
          <img src={avatartNav} alt="" />
        </div>
      </div>
      <section className="section-content">
        <div className="content-user">
          <Link
            to={{
              pathname: "/home",
            }}
          >
            <img src={back} alt="back" />
          </Link>
          <p>Pedidos de {renderNameUser()}</p>
        </div>
        <div className="content-divisor">
          <div className="divisor" />
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
                {renderDateOrder()}{" "}
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
      </section>
    </Container>
  );
}
