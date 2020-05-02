import React from "react";
import { Link } from "react-router-dom";
import { OrdersContainer } from "./styles";
import FormatNumber from "../../utils/FormatNumber";
export default function Orders({ item }) {
  console.log(item);
  return (
    <OrdersContainer>
      <div style={{ width: "100%" }}>
        <p style={{ fontFamily: "Open Sans", textAlign: "left" }}>
          {" "}
          <span
            style={{
              fontWeight: 600,
              fontFamily: "Open Sans",
              fontSize: 16,
            }}
          >
            13/05/2019,{" "}
          </span>
          Você vendeu{" "}
          <span
            style={{
              fontWeight: 600,
              fontFamily: "Open Sans",
              fontSize: 16,
            }}
          >
            {FormatNumber(item.valueSale)}
          </span>
        </p>
      </div>
      {item.sale.map((i) => (
        <Link key={i.id} to="detail-order">
          <div className="card">
            <div className="user">
              <img src={i.avatar} alt="user avatar" />
            </div>
            <div className="content-card">
              <div className="info-user">
                <p className="user-name">{i.name}</p>
                <p className="price-order">{FormatNumber(i.value)}</p>
              </div>
              <div>
                <p style={{ lineHeight: 0 }} className="info-order">
                  {i.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </OrdersContainer>
  );
}
