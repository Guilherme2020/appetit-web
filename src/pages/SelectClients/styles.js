import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: auto;
  display: flex;
  flex-direction: row;

  .content-product {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -1%;
  }
  .content-new-order {
    width: 100%;
    height: 100%;
    padding-left: 26%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .content-title-product {
    width: 89%;

    h1 {
      text-align: left;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height, or 150% */

      /* Black 0.88% */

      color: rgba(0, 0, 0, 0.88);
    }
  }
  .content-product-choise {
    display: flex;
    justify-content: space-between;
    width: 87%;
  }
  .content-product-choise .product-choise-name {
    width: 67%;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
  }
  .content-product-choise .product-choise-price {
    /* Body */

    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.54);
  }
  .product-choise-observation {
    /* Body */

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Black 0.56% */

    color: rgba(0, 0, 0, 0.56);
  }
  .line-separator {
    width: 104%;
    display: flex;
    background: rgba(0, 0, 0, 0.08);
    height: 8px;
  }
  .amount-products {
    width: 89%;
    display: flex;
    justify-content: space-between;

    > p {
      /* h4 */

      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      color: rgba(0, 0, 0, 0.88);
    }
  }
  .amount-products .amount {
    padding-right: 50px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    /* Black 0.56% */

    color: rgba(0, 0, 0, 0.56);
  }
  .content-order {
    height: 91px;
    width: 89%;
    margin-top: 9%;

    h3 {
      /* h3 */

      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 2px;
      /* identical to box height, or 150% */

      color: rgba(0, 0, 0, 0.87);
    }
    div {
      background: #ff8822;
      width: 63%;
      height: 2px;
    }
  }
  .ilustration {
    margin-top: 10%;
  }
  .content-description-order {
    width: 100%;
    height: 768px;
    height: auto;
    background: #fafafa;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .content-text-description {
    height: 106;
    width: 89%;
    margin-top: 9%;

    h3 {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      /* identical to box height, or 150% */
      line-height: 0;
      color: rgba(0, 0, 0, 0.87);
    }
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.56);
      line-height: 1.3;
    }
  }
  .detail-order {
    width: 89%;
  }
  .container-iten {
    display: flex;
  }
  .container-iten .content-img {
    align-items: center;
    display: flex;
    height: 94px;
  }
  .container-iten .content-details-iten {
    flex-direction: column;
  }
  .content-details-iten .name-product {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.87);
    line-height: 28px;
  }
  .content-details-iten .price-product {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 0;
    color: rgba(0, 0, 0, 0.54);
  }
  .content-description-options {
    width: 89%;
    margin-top: 1%;

    h6 {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 0;
      color: rgba(0, 0, 0, 0.87);
    }
  }
  .divisor-observation {
    margin-top: 3%;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.08);
  }
  .content-observation {
    width: 90%;
    margin-top: 1%;

    h6 {
      /* h6 */

      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 0px;
      /* identical to box height, or 150% */
      color: rgba(0, 0, 0, 0.87);
    }
  }

  .content-info-order {
    width: 100%;
    margin-top: 2%;

    h1 {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      text-align: left;
      font-size: 24px;
      padding-left: 5%;
      color: rgba(0, 0, 0, 0.87);
    }
  }
  .line-content {
    background: #ff8822;
    width: 76%;
    height: 2px;
    margin-left: 25px;
  }

  .text-info {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    /* or 150% */

    /* Black 0.56% */

    color: rgba(0, 0, 0, 0.56);
  }
  .text-step {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.64);
  }
  .content-itens-choise {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
    height: 68px;
    margin-top: 10%;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  .content-change-iten {
    display: flex;
    width: 16%;
    align-items: center;
    justify-content: space-between;
    padding: 26px;
  }
  .content-options {
    width: 84%;
    padding: 15px;
    height: 25px;
    background: #ffffff;
    margin: 6px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

    div {
      display: flex;
      justify-content: space-between;
      width: 17%;
      align-items: center;
    }
  }
  .add-cart {
    padding: 22px;

    width: 203px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: #ff8822;
      border-radius: 5px;
      width: 99%;
      color: white;
      height: 48px;
      border: 2px solid #ff8822;

      color: #ffffff;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
    }
  }
  .clients-content {
    background: #ff8822;
    margin-top: 54%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 36%;
    height: 55px;

    position: absolute;
    p {
      /* h6 */
      padding-left: 10px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      color: #ffffff;
    }
    a {
      text-decoration: none;
      width: 18%;
      margin-right: 2%;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-right: 3%;
    }
  }

  .label-float {
    position: relative;
    padding-top: 13px;
    margin-left: 1%;
  }

  .label-float input {
    border: 0;
    border-bottom: 2px solid lightgrey;
    outline: none;
    min-width: 180px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    border-radius: 0;
  }

  .label-float input:focus {
    border-bottom: 2px solid #ff8822;
  }

  .label-float input::placeholder {
    color: transparent;
  }

  .label-float label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Open Sans";
    margin-top: 13px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  .label-float input:required:invalid + label {
    color: red;
  }
  .label-float input:focus:required:invalid {
    border-bottom: 2px solid red;
  }
  .label-float input:required:invalid + label:before {
    content: "*";
  }
  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: 0;
    color: #ff8822;
  }
`;
