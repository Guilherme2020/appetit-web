import FormatNumber from "./FormatNumber";

const CalcItensCart = (cart) => {
  let total = 0;
  cart.map((c) => {
    total += c.qnt * c.price;
  });
  return FormatNumber(total);
};

export default CalcItensCart;
