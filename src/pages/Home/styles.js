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
    width: 99%;

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

  @media only screen and (min-width: 320px) and (max-width: 620px) {
    .content-user {
      width: 85%;
      padding-left: 0;
      p {
        width: 100%;
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
    .card .user {
      width: 26%;
    }
  }
`;
