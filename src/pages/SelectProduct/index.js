import React, { useState } from "react";
import Aside from "../../components/Sidebar";
import Itens from "../../components/Itens";
import Header from "../../components/Header";
import { Container } from "./styles";
import { Line } from "rc-progress";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import back from "../../assets/back.png";
import arrow from "../../assets/arrow-right.svg";
import ilustration from "../../assets/Illustration.png";
import cuscuzSimples from "../../assets/cuscuzsimples.svg";
import cuscuzCompleto from "../../assets/cuscuzcompleto.svg";
import paocaseiro from "../../assets/paocaseiro.svg";
import paocaseiroCompleto from "../../assets/paocaseirocompleto.svg";
import FormatNumber from "../../utils/FormatNumber";

const productsList = [
  {
    id: 1,
    name: "Cuzcuz Simples",
    price: 2.25,
    imgIten: cuscuzSimples,
    options: [
      {
        id: 1,
        name: "milho",
      },
      {
        id: 2,
        name: "arroz",
      },
    ],
  },
  {
    id: 2,
    name: "Cuzcuz Completo",
    price: 2.25,
    imgIten: cuscuzCompleto,
    options: [
      {
        id: 1,
        name: "milho",
      },
      {
        id: 2,
        name: "arroz",
      },
    ],
  },
  {
    id: 3,
    name: "Pão caseiro",
    price: 2.25,
    imgIten: paocaseiro,
    options: [
      {
        id: 1,
        name: "milho",
      },
      {
        id: 2,
        name: "arroz",
      },
    ],
  },
  {
    id: 4,
    name: "Pão caseiro completo",
    price: 2.25,
    imgIten: paocaseiroCompleto,
    options: [
      {
        id: 1,
        name: "milho",
      },
      {
        id: 2,
        name: "arroz",
      },
    ],
  },
];

export default function SelectProduct() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(productsList);
  const [increment, setIncrement] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const [itemDetail, setItemDetail] = useState({});
  const [option, setOption] = useState("");
  const [observation, setObservation] = useState("");
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    // itemDetail.price, increment, itemDetail.name,itemDetail.img
    const formatIten = {
      id: item.id,
      observation,
      price: item.price,
      name: item.name,
      qnt: increment,
      img: item.imgIten,
    };

    setCart([...cart, formatIten]);
    setShowDetail(false);
    setIncrement(1);
    setObservation("");
    setOption("");
  };

  const calcItensCart = (cart) => {
    let total = 0;
    cart.map((c) => {
      total += c.qnt * c.price;
    });
    return FormatNumber(total);
  };

  const renderDetail = (item) => {
    setItemDetail(item);
    setShowDetail(true);
  };
  const amountIten = (price, increment) => {
    const amount = price * increment;
    return FormatNumber(amount);
  };
  function renderItens() {
    return products.map((item, index) => (
      <Itens
        key={item.id}
        cart={cart}
        item={item}
        renderDetail={() => renderDetail(item)}
      />
    ));
  }

  const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const renderCart = () => {
    if (cart.length > 0) {
      return (
        <div className="cart-content">
          <p>Total: {calcItensCart(cart)}</p>

          <Link onClick={() => saveCart()} to="select-clients">
            <div>
              <p>Avançar</p>
              <img src={arrow} alt="avançar" />
            </div>
          </Link>
        </div>
      );
    }
  };
  const decrementIten = () => {
    if (increment > 1) {
      setIncrement(increment - 1);
    }
  };
  const incrementIten = () => {
    setIncrement(increment + 1);
  };
  const searchFilterFunction = (text) => {
    setSearch(text);

    const newData = products.filter((item) => {
      const itemData = `${item.name.toUpperCase()} ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setProducts(newData);
    if (text.length === 0) {
      setProducts(productsList);
    }
  };
  return (
    <Container>
      <Aside />
      {showDetail && (
        <div className="content-product">
          <div className="content-new-order">
            <div className="content-order">
              <Link to="home">
                <img src={back} alt="back" />
              </Link>
              <h3>Novo Pedido</h3>
              <div />
            </div>
            <div className="ilustration">
              <img src={ilustration} alt="Ilustration" />
            </div>
          </div>
          <div className="content-description-order" style={{ height: 772 }}>
            <Header />
            <div className="content-text-description">
              <div onClick={() => setShowDetail(false)}>
                <img src={back} alt="back" />
              </div>

              <h3>Detalhes do pedido</h3>
              <div className="divisor" />
              <p>
                Aproveite para adicionar alguma observação para este pedido,
                caso queira.
              </p>
            </div>

            <div className="detail-order">
              <div className="container-iten">
                <div className="content-img">
                  <img src={itemDetail && itemDetail.imgIten} alt="img iten" />
                </div>
                <div className="content-details-iten">
                  <p className="name-product">
                    {itemDetail && itemDetail.name}
                  </p>
                  <p className="price-product">
                    {itemDetail && FormatNumber(itemDetail.price)}
                  </p>
                </div>
              </div>
            </div>
            <div className="content-description-options">
              <h6>Opções</h6>

              <p
                style={{
                  color: "rgba(0, 0, 0, 0.56)",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 16,
                }}
              >
                Escolha dentre as opções de massas abaixo.
              </p>
            </div>

            {itemDetail &&
              itemDetail.options.map((option) => (
                <div className="content-options" key={option.id}>
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="name"
                      onChange={(e) => setOption(e.target.value)}
                      value={option.name}
                    />
                    <label>{option.name}</label>
                  </div>

                  <div style={{}}></div>
                </div>
              ))}
            <div className="divisor-observation" />
            <div className="content-observation">
              <h6>Observações</h6>
              <div>
                <label
                  className="pure-material-textfield-outlined"
                  style={{ width: "100%" }}
                >
                  <input
                    placeholder=" "
                    type="text"
                    onChange={(e) => setObservation(e.target.value)}
                  />
                  <span>Observações</span>
                </label>
              </div>
            </div>

            {option && (
              <div className="content-itens-choise">
                <div className="content-change-iten">
                  <IoMdRemove
                    color={"#979797"}
                    onClick={() => decrementIten()}
                  />
                  {increment}

                  <IoMdAdd color={"#FF8822"} onClick={() => incrementIten()} />
                </div>

                <div className="add-cart">
                  <button type="button" onClick={() => addCart(itemDetail)}>
                    Adicionar {amountIten(itemDetail.price, increment)}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!showDetail && (
        <div className="content-product">
          <div className="content-new-order">
            <div className="content-order">
              <Link to="home">
                <img src={back} alt="back" />
              </Link>
              <h3>Novo Pedido</h3>
              <div />
            </div>
            <div className="ilustration">
              <img src={ilustration} alt="Ilustration" />
            </div>
          </div>
          <div className="content-description-order" style={{ height: 772 }}>
            <Header />
            <div className="content-info-order">
              <h1>Informações para o Pedido</h1>
              <div />
            </div>
            <div style={{ width: "100%", height: 70 }}>
              <p style={{ paddingLeft: "5%" }} className="text-info">
                Preencha as informações abaixo para concluir esta venda.
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ marginLeft: "5%" }} className="text-step">
                Passo 1 de 3
              </p>
            </div>
            <Line
              percent="33"
              style={{ width: "90%" }}
              strokeWidth="3"
              strokeColor="#ff8822"
              trailWidth={3}
              trailColor={"#E6E6E6"}
            />

            <div style={{ width: "100%" }}>
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 16,
                  paddingLeft: "5%",
                  color: "rgba(0,0,0, 0.88)",
                }}
              >
                O que você está vendendo?
              </p>
            </div>
            <div
              style={{ width: "91%", display: "flex", alignItems: "center" }}
            >
              <AiOutlineSearch
                style={{ marginTop: "3%" }}
                color="#ff8822"
                size={23}
              />

              <div className="label-float">
                <input
                  type="text"
                  onChange={(e) => searchFilterFunction(e.target.value)}
                  value={search}
                  placeholder=" "
                  style={{ width: "212%", background: "#FAFAFA" }}
                />

                <label>Procure o produto aqui...</label>
              </div>
            </div>
            {renderItens()}
            {renderCart()}
          </div>
        </div>
      )}
    </Container>
  );
}
