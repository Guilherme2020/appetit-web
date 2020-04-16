import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField, { HelperText, Input } from "@material/react-text-field";

import "@material/react-text-field/dist/text-field.css";

import { Container, Button } from "./styles";

export default function Form({ props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goHome = () => {
    console.log(props);
    props.history.push("/home");
  };
  return (
    <>
      <Container>
        <form>
          <TextField
            label="Email"
            outlined
            // className="mdc-text-field--focused"
            // className="mdc-text-field--focused"
            // .mdc-text-field .mdc-text-field__input {
            //   caret-color: #6200ee;
            //   caret-color:
            // helperText={<HelperText>ie. pudding, cabbage, steel oats</HelperText>}
          >
            <Input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextField>
          <TextField
            className={"mdc-text-field"}
            label="Senha"
            outlined
            // helperText={<HelperText>ie. pudding, cabbage, steel oats</HelperText>}
          >
            <Input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextField>
        </form>
        <section className="content-enter-login">
          <Link to="/"> Recuperar Minha Senha</Link>
          <Button
            disabled={email && password ? false : true}
            opacity={email && password ? 1 : 0.5}
            onClick={() => goHome()}
          >
            ENTRAR
          </Button>
        </section>
        <footer className="footer">Infoway Gestão em Saúde ©, 2019.</footer>
      </Container>
    </>
  );
}
