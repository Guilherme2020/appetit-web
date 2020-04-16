import React from "react";

import { Container } from "./styles";
import Form from "../../components/Form";
import logo from "../../assets/logo.svg";

export default function Login(props) {
  return (
    <Container>
      <div className="content">
        <img src={logo} alt="appetit" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <h3 className="welcome-title">Seja bem-vindo!</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="text-description">
              Nós sabemos a importância de estar sempre de barriga cheia e o
              quanto isso pode ajudar no seu dia.
            </p>
          </div>
        </div>
        <Form props={props} />
      </div>
    </Container>
  );
}
