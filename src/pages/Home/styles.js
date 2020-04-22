import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: auto;
  flex-direction: column;

  .content-user {
    display: flex;
    width: 32%;
    align-items: center;
    justify-content: center;
    padding-left: 4%;
    margin-top: 5%;

    p {
      text-align: left;
      width: 100%;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 36px;
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
    margin-top: 10%;
    width: 32%;
    padding-left: 5%;
  }
  .card {
    display: flex;
    position: absolute;
    left: 372px;
    right: 1.93%;
    top: 41.54%;
    bottom: 48.83%;
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
`;
