import styled from "styled-components";

export const OrdersContainer = styled.div`
  margin-top: 3%;
  width: 901px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20%;
  @media only screen and (min-width: 320px) and (max-width: 620px) {
    width: 316px;
    padding-left: 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 620px) {
    .card .user {
      width: 26%;
    }
    .info-order {
      /* margin-top: -8px; */
      line-height: 9px;
    }
    .info-user {
      height: 35px;
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

  a {
    text-decoration: none;
    display: flex;
    /* position: absolute; */
    /* left: 372px; */
    /* width: 100%; */
    /* right: 1.93%; */
    /* top: 38.54%; */
    bottom: 48.83%;
    height: 71px;
    width: 100%;
    /* margin-top: 2%; */
    margin-bottom: 18px;
    background: #ffffff;
    box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .card {
    /* display: flex;
    position: absolute;
    left: 372px;
    width: 70%;
    right: 1.93%;
    top: 38.54%;
    margin-top: 2%;
    bottom: 48.83%;
    height: 90px;
    background: #ffffff;
    box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px; */
    display: flex;
    /* position: absolute; */
    /* left: 372px; */
    /* width: 100%; */
    /* right: 1.93%; */
    /* top: 38.54%; */
    bottom: 48.83%;
    height: 71px;
    width: 100%;
    /* margin-top: 2%; */
    margin-bottom: 18px;
    background: #ffffff;
    box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .card .user {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 6px;
  }
  .content-card {
    width: 100%;
    height: auto;
  }
  .info-user {
    display: flex;
    justify-content: space-between;
    height: 40px;
  }
  .info-user .user-name {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    color: rgba(0, 0, 0, 0.87);
  }
  .info-user .price-order {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    text-align: right;
    color: rgba(0, 0, 0, 0.87);
    margin-right: 8px;
  }
  .info-order {
    /* Caption */
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */
    color: rgba(0, 0, 0, 0.54);
  }
`;
