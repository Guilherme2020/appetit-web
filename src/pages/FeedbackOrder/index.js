import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import Aside from "../../components/Sidebar";
import avatartNav from "../../assets/avatar-navbar.svg";
import feedback from "../../assets/feedback.svg";

function FeedbackOrder() {
  return (
    <>
      <Container>
        <Aside />
        <div className="container-header">
          <div>
            <img src={avatartNav} alt="avatar nav" />
          </div>
        </div>
        <section className="section-feedback">
          <div>
            <img src={feedback} alt="feedback" />
          </div>
          <div className="container-btn-options">
            <Link to="home">
              <button className="back-list-orders">
                VOLTAR PARA LISTA DE PEDIDOS
              </button>
            </Link>
            <Link to="select-product">
              <button className="new-order">FAZER NOVO PEDIDO</button>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}

export default FeedbackOrder;
