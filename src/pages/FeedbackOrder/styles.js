import styled from "styled-components";

export const Container = styled.div`
  background: #fafafa;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 800px;
  flex-direction: column;
  .container-header {
    display: flex;
    width: 100%;
    height: 41px;

    div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      height: 45px;
      padding-right: 3%;
      padding-top: 5%;
    }
  }
  .section-feedback {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20%;
    margin-top: 8%;
    flex-direction: column;
    margin-bottom: 29%;
  }
  .section-feedback .container-btn-options {
    width: 672px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6%;
  }
  .back-list-orders {
    width: 328px;
    height: 48px;
    background: #ffffff;

    /* Black 0.88% */
    border: 2px solid rgba(0, 0, 0, 0.88);
    box-sizing: border-box;
    border-radius: 100px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    text-align: center;
    text-transform: uppercase;

    /* Black 0.88% */

    color: rgba(0, 0, 0, 0.88);
  }
  .new-order {
    width: 328px;
    height: 48px;

    /* Primary */

    background: #ff8822;
    border-radius: 100px;
    border: 2px solid #ff8822;
    /* Button */

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    text-align: center;
    text-transform: uppercase;

    /* White */

    color: #ffffff;
  }
  @media only screen and (min-width: 320px) and (max-width: 620px) {
    .container-header {
      display: none;
    }
    .section-feedback {
      padding-left: 0;
    }
    .section-feedback .container-btn-options {
      width: 100%;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      height: 100%;
      margin-top: 19%;
    }
    .container-btn-options .back-list-orders {
      margin: 15px;
    }
  }
`;
