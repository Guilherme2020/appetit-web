import styled from "styled-components";

export const Container = styled.div`
  /* width: 75%; */
  align-items: center;
  justify-content: center;
  display: flex;
  height: auto;
  flex-direction: column;

  .orders {
    width: 68%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 20%;
  }
  .content-user {
    display: flex;
    flex-direction: column;
    width: 52%;
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
  .card {
    display: flex;
    /* position: absolute; */
    /* left: 372px; */
    width: 100%;
    /* right: 1.93%; */
    /* top: 38.54%; */

    bottom: 48.83%;
    height: 71px;
    margin-bottom: 18px;
    background: #ffffff;
    box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .card .user {
    width: 14%;
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
    margin-top: 9px;
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
