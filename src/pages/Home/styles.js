import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: auto;
  flex-direction: column;
  .orders {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 20%;
    padding-left: 68%;
  }
  .orders a {
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
  .content-user {
    display: flex;
    flex-direction: column;
    width: 32%;
    align-items: center;
    justify-content: center;
    padding-left: 4%;
    margin-top: 4%;
    hr {
      background: #ff8822;
      width: 154px;
      height: 2px;
      margin-left: 2px;
    }
    p {
      text-align: left;
      width: 100%;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 0px;
      /* identical to box height, or 150% */

      /* Black 0.88% */

      color: rgba(0, 0, 0, 0.88);
    }
  }

  .make-order {
    position: absolute;
    width: 901px;
    height: 56px;
    left: 369px;
    top: 142px;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding-left: 4%;
    a {
      text-decoration: none;
    }
    div {
      display: flex;
      width: 19%;
      align-items: center;
      justify-content: center;
      margin-left: -5%;
    }
    p {
      /* Button */
      margin-left: 12px;
      margin-top: 16px;
      font-family: Open Sans;
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
