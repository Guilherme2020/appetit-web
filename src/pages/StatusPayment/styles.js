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
  .content-order {
    height: 106px;
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
    margin-top: 1%;
    > div {
      cursor: pointer;
    }
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
  .divisor {
    background: #ff8822;
    width: 52%;

    height: 2px;
  }
  .detail-order {
    width: 89%;
    height: 65px;
  }
  .container-iten {
    display: flex;
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
  .container-iten .content-img {
    align-items: center;
    display: flex;
    height: 94px;
    width: 12%;
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
    margin-top: 4%;

    h1 {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      text-align: left;
      font-size: 24px;
      padding-left: 5%;
      color: rgba(0, 0, 0, 0.87);
    }
    div {
      background: #ff8822;
      width: 50%;

      height: 2px;
      margin-left: 5%;
    }
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
    margin-top: 22%;

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
  .cart-content {
    background: #ff8822;
    margin-top: 60%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 37%;
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
  .pure-material-textfield-outlined {
    --pure-material-safari-helper1: rgb(
      var(--pure-material-primary-rgb, 33, 150, 243)
    );
    position: relative;
    display: inline-block;
    padding-top: 6px;
    font-family: var(
      --pure-material-font,
      "Roboto",
      "Segoe UI",
      BlinkMacSystemFont,
      system-ui,
      -apple-system
    );
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
  }

  /* Input, Textarea */
  .pure-material-textfield-outlined > input,
  .pure-material-textfield-outlined > textarea {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px; /* Safari */
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-top-color: transparent;
    border-radius: 4px;
    padding: 15px 13px 15px;
    width: 100%;
    height: inherit;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    transition: border 0.2s, box-shadow 0.2s;
  }

  /* Span */
  .pure-material-textfield-outlined > input + span,
  .pure-material-textfield-outlined > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    width: 100%;
    max-height: 100%;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    font-size: 75%;
    line-height: 15px;
    cursor: text;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

  /* Corners */
  .pure-material-textfield-outlined > input + span::before,
  .pure-material-textfield-outlined > input + span::after,
  .pure-material-textfield-outlined > textarea + span::before,
  .pure-material-textfield-outlined > textarea + span::after {
    content: "";
    display: block;
    box-sizing: border-box;
    margin-top: 6px;
    border-top: solid 1px;
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    min-width: 10px;
    height: 8px;
    pointer-events: none;
    box-shadow: inset 0 1px transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .pure-material-textfield-outlined > input + span::before,
  .pure-material-textfield-outlined > textarea + span::before {
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }

  .pure-material-textfield-outlined > input + span::after,
  .pure-material-textfield-outlined > textarea + span::after {
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 4px;
  }

  /* Hover */
  .pure-material-textfield-outlined:hover > input,
  .pure-material-textfield-outlined:hover > textarea {
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    border-top-color: transparent;
  }

  .pure-material-textfield-outlined:hover > input + span::before,
  .pure-material-textfield-outlined:hover > textarea + span::before,
  .pure-material-textfield-outlined:hover > input + span::after,
  .pure-material-textfield-outlined:hover > textarea + span::after {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  }

  .pure-material-textfield-outlined:hover > input:not(:focus):placeholder-shown,
  .pure-material-textfield-outlined:hover
    > textarea:not(:focus):placeholder-shown {
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  }

  /* Placeholder-shown */
  .pure-material-textfield-outlined > input:not(:focus):placeholder-shown,
  .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  }

  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span,
  .pure-material-textfield-outlined
    > textarea:not(:focus):placeholder-shown
    + span {
    font-size: inherit;
    line-height: 68px;
  }

  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > textarea:not(:focus):placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span::after,
  .pure-material-textfield-outlined
    > textarea:not(:focus):placeholder-shown
    + span::after {
    border-top-color: transparent;
  }

  /* Focus */
  .pure-material-textfield-outlined > input:focus,
  .pure-material-textfield-outlined > textarea:focus {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    border-top-color: transparent;
    box-shadow: inset 1px 0 var(--pure-material-safari-helper1),
      inset -1px 0 var(--pure-material-safari-helper1),
      inset 0 -1px var(--pure-material-safari-helper1);
    outline: none;
  }

  .pure-material-textfield-outlined > input:focus + span,
  .pure-material-textfield-outlined > textarea:focus + span {
    color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  }

  .pure-material-textfield-outlined > input:focus + span::before,
  .pure-material-textfield-outlined > input:focus + span::after,
  .pure-material-textfield-outlined > textarea:focus + span::before,
  .pure-material-textfield-outlined > textarea:focus + span::after {
    border-top-color: var(--pure-material-safari-helper1) !important;
    box-shadow: inset 0 1px var(--pure-material-safari-helper1);
  }

  /* Disabled */
  .pure-material-textfield-outlined > input:disabled,
  .pure-material-textfield-outlined > input:disabled + span,
  .pure-material-textfield-outlined > textarea:disabled,
  .pure-material-textfield-outlined > textarea:disabled + span {
    border-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.38
    ) !important;
    border-top-color: transparent !important;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    pointer-events: none;
  }

  .pure-material-textfield-outlined > input:disabled + span::before,
  .pure-material-textfield-outlined > input:disabled + span::after,
  .pure-material-textfield-outlined > textarea:disabled + span::before,
  .pure-material-textfield-outlined > textarea:disabled + span::after {
    border-top-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.38
    ) !important;
  }

  .pure-material-textfield-outlined > input:disabled:placeholder-shown,
  .pure-material-textfield-outlined > input:disabled:placeholder-shown + span,
  .pure-material-textfield-outlined > textarea:disabled:placeholder-shown,
  .pure-material-textfield-outlined
    > textarea:disabled:placeholder-shown
    + span {
    border-top-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.38
    ) !important;
  }

  .pure-material-textfield-outlined
    > input:disabled:placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > input:disabled:placeholder-shown
    + span::after,
  .pure-material-textfield-outlined
    > textarea:disabled:placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > textarea:disabled:placeholder-shown
    + span::after {
    border-top-color: transparent !important;
  }

  /* Faster transition in Safari for less noticable fractional font-size issue */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .pure-material-textfield-outlined > input,
      .pure-material-textfield-outlined > input + span,
      .pure-material-textfield-outlined > textarea,
      .pure-material-textfield-outlined > textarea + span,
      .pure-material-textfield-outlined > input + span::before,
      .pure-material-textfield-outlined > input + span::after,
      .pure-material-textfield-outlined > textarea + span::before,
      .pure-material-textfield-outlined > textarea + span::after {
        transition-duration: 0.1s;
      }
    }
  }
`;
