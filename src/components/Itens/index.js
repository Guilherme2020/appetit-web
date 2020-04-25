import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Container } from "./styles";

export default function Itens({ item, renderDetail, cart }) {
  console.log("cart", cart);
  const inCart = cart.find((i) => i.id === item.id);

  console.log(inCart);
  return (
    <>
      <Container key={item.id}>
        <div className="content-itens">
          <div style={{ cursor: "pointer" }} onClick={() => renderDetail(item)}>
            {inCart ? (
              <div className="background-img">
                <BsCheckCircle color={"#FFFFFF"} />
              </div>
            ) : (
              <img
                // className={inCart ? "background-img" : null}
                src={item.imgIten}
                alt="iten"
              />
            )}
          </div>
          <p style={{ width: "59%" }}>{item.name}</p>
          <p>R$ {item.price}</p>
        </div>
      </Container>
    </>
  );
}
