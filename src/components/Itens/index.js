import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Container } from "./styles";
import FormatNumber from "../../utils/FormatNumber";

export default function Itens({ item, renderDetail, cart }) {
  const inCart = cart.find((i) => i.id === item.id);

  return (
    <>
      <Container key={item.id}>
        <div className="content-itens">
          <div style={{ cursor: "pointer" }} onClick={() => renderDetail(item)}>
            {inCart ? (
              <div className="background-img">
                <BsCheckCircle color={"#FFFFFF"} size={25} />
              </div>
            ) : (
              <img
                // className={inCart ? "background-img" : null}
                src={item.imgIten}
                alt="iten"
              />
            )}
          </div>
          <p className="iten-name">{item.name}</p>
          <p className="iten-price">{FormatNumber(item.price)}</p>
        </div>
        <div className="divisor-content" />
      </Container>
    </>
  );
}
