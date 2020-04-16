import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  form {
    display: flex;
    flex-direction: column;
    height: 139px;
    width: 56%;
    justify-content: space-between;
  }
  .content-enter-login {
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-enter-login a {
    position: absolute;
    top: 466px;
    bottom: 213px;

    /* Button */

    font-family: "Open Sans";

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    /* Black 0.88% */

    color: rgba(0, 0, 0, 0.88);
  }
  .btn-login {
  }
  .footer {
    position: absolute;
    height: 24px;
    left: 40.48%;
    right: 40.41%;
    top: calc(50% - 24px / 2 + 321px);
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.56);
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 328px;
  height: 48px;
  left: 519px;
  top: 509px;
  background: #ff8822;
  border-radius: 100px;
  cursor: pointer;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  opacity: ${(props) => props.opacity};
  /* identical to box height, or 157% */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;
