import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Container } from "./styles";

export default function Clients({ item, clients, select }) {
  const inList = clients.find((i) => i.id === item.id);

  return (
    <>
      <Container key={item.id}>
        <div className="content-itens">
          <div style={{ cursor: "pointer" }} onClick={() => select(item)}>
            {inList ? (
              <div className="background-img">
                <BsCheckCircle color={"#FFFFFF"} size={25} />
              </div>
            ) : (
              <img
                // className={inCart ? "background-img" : null}
                src={item.avatar}
                alt="iten"
              />
            )}
          </div>
          <p className="iten-name">{item.name}</p>
        </div>
        <div className="divisor-content" />
      </Container>
    </>
  );
}
