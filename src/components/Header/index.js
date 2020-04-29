import React from "react";

import { Container } from "./styles";
import avatartNav from "../../assets/avatar-navbar.svg";

export default function Header() {
  return (
    <Container>
      <div>
        <img src={avatartNav} alt="" />
      </div>
    </Container>
  );
}
