import React, { useState } from "react";
import TextField, { HelperText, Input } from "@material/react-text-field";

import "@material/react-text-field/dist/text-field.css";

import { Container, Button } from "./styles";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Container>
        <form>
          <TextField
            label="Email"
            outlined
            // helperText={<HelperText>ie. pudding, cabbage, steel oats</HelperText>}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </TextField>
          <TextField
            label="Senha"
            outlined
            // helperText={<HelperText>ie. pudding, cabbage, steel oats</HelperText>}
          >
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextField>
        </form>
        <section className="content-enter-login">
          <a> Recuperar Minha Senha</a>
          <Button
            disabled={email && password ? false : true}
            opacity={email && password ? 1 : 0.5}
          >
            ENTRAR
          </Button>
        </section>
        <footer className="footer">Infoway Gestão em Saúde ©, 2019.</footer>
      </Container>
    </>
  );
}
