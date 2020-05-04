import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <div>
            <label
              className="pure-material-textfield-outlined"
              style={{ width: "100%" }}
            >
              <input
                placeholder=" "
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
            </label>
          </div>
          <div>
            <label
              className="pure-material-textfield-outlined"
              style={{ width: "100%" }}
            >
              <input
                placeholder=" "
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Senha</span>
            </label>
          </div>
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
