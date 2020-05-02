import styled from "styled-components";

export const Container = styled.div`
  background: #fafafa;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: auto;
  flex-direction: column;

  .content-user {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 4%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-left: 20%;

    p {
      text-align: left;
      width: 100%;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 0px;
      color: rgba(0, 0, 0, 0.88);
    }
  }
  .divisor {
    background: #ff8822;
    width: 24%;

    display: flex;
    height: 2px;
    margin-left: 20%;
  }
  .make-order {
    width: 99%;
    margin-top: 20px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding-left: 1%;
    margin-left: 20%;
    align-items: center;
    justify-content: center;

    a {
      width: 100%;
      text-decoration: none;
    }
    div {
      display: flex;
      width: 32%;
      align-items: center;
      justify-content: center;
      margin-left: -5%;
    }
    p {
      /* Button */
      margin-left: 12px;
      margin-top: 16px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */

      text-transform: uppercase;

      /* Black 0.56% */

      color: rgba(0, 0, 0, 0.56);
    }
  }

  .orders {
    margin-top: 13%;
    /* width: 32%;
    padding-left: 5%; */
  }
  .container-input {
    margin-top: 10px;
    width: 91%;
    display: flex;
    align-items: center;
    padding-left: 20%;
  }
  .label-float {
    position: relative;
    padding-top: 13px;
    margin-left: 1%;
    width: 50%;

    input {
      width: 212%;
      background: #fafafa;
    }
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
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    color: rgba(0, 0, 0, 0.54);
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
    /* Body */

    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    color: rgba(0, 0, 0, 0.54);
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
  @media only screen and (min-width: 320px) and (max-width: 620px) {
    .content-user {
      width: 85%;
      padding-left: 0;
      p {
        width: 100%;
      }
    }
    .divisor {
      margin-left: 2px;
      width: 24%;
    }
    .container-input {
      width: 100%;
      padding-left: 0;
    }
    .label-float {
      width: 60%;
      margin-left: 2px;

      input {
        width: 153%;
      }
    }
    .make-order {
      display: flex;
      align-items: center;
      position: inherit;
      width: 100%;
      margin-left: 0;
      a {
        width: 100%;
        display: flex;
        margin-left: 10px;
      }
      div {
        margin-left: 0;
        width: 100%;
      }
      p {
        font-size: 12px;
      }
    }
    .orders {
      width: 316px;
      padding-left: 0;
    }
    .info-order {
      line-height: 10px;
    }
    .card .user {
      width: 26%;
    }
  }
`;
