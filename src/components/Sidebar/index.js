import React from "react";

import { Aside, Content } from "./styles";
import logo from "../../assets/logo-white.svg";
import iconOrder from "../../assets/list.svg";
import avatar from "../../assets/avatar-user-side.svg";
export default function Sidebar() {
  return (
    <>
      <Aside>
        <Content>
          <div className="logo-content">
            <img src={logo} alt="logo" />
          </div>

          <div className={"orders-aside"}>
            <div>
              <img alt="icon" src={iconOrder} />
              <p>pedidos</p>
            </div>
          </div>
          <div className={"orders-open"}>
            <p>| Em abertos</p>
            <p className={"orders-closed"}>Encerrados</p>
          </div>
          <div></div>
          <div className={"content-clients"}>
            <div>
              <img alt="icon" src={avatar} />
              <p>Clientes</p>
            </div>
          </div>
          <footer className={"footer-sidebar"}>
            {/* Infoway Gestão em Saúde ©, 2019. */}
          </footer>
        </Content>
      </Aside>
    </>
  );
}
