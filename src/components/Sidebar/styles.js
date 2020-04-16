import styled from "styled-components";

export const Aside = styled.aside`
  position: absolute;
  width: 342px;
  height: 768px;
  left: 0px;
  top: 0px;

  /* Primary */

  background: #ff8822;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.section`
  margin-top: 21%;

  .logo-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .orders {
    background: #ffffff;
    position: absolute;
    width: 342px;
    height: 56px;
    display: flex;
    margin-top: 15%;
    p {
      position: absolute;
      width: 108px;
      height: 22px;
      left: 58px;
      /* top: 233px; */

      /* Button */

      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */

      text-transform: uppercase;

      /* Primary */

      color: #ff8822;
    }
  }
  .orders-open {
    margin-top: 31%;

    padding-left: 12%;
    display: flex;
    flex-direction: column;

    > p {
      /* Button */

      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */

      text-transform: uppercase;

      color: #ffffff;
    }
  }
  .orders-closed {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.54);
  }
  .content-clients {
    padding-left: 12%;
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */

      text-transform: uppercase;

      /* White */

      color: #ffffff;
    }
  }
  .footer-sidebar {
    position: absolute;
    width: 196px;
    height: 18px;
    left: 73px;
    top: 710px;

    /* Caption */

    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    /* White */

    color: #ffffff;
  }
`;
