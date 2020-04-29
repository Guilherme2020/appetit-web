import styled from "styled-components";

export const Container = styled.div`
  width: 88%;
  margin-top: 3%;

  .divisor-content {
    width: 100%;
    background: #979797;
    opacity: 0.3;
    display: flex;
    height: 1px;
  }
  .content-itens {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .content-itens .iten-name {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    width: 86%;

    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.87);
  }
  .content-itens .iten-price {
    /* Body */

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.54);
  }
  .background-img {
    background: #ff8822;
    border-radius: 34px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
