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
  .label-float {
    position: relative;
    padding-top: 13px;
    margin-left: 1%;
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
  .pure-material-textfield-outlined {
    --pure-material-safari-helper1: rgba(0, 0, 0, 0.56);
    position: relative;
    display: inline-block;
    padding-top: 6px;
    font-family: var(
      --pure-material-font,
      "Open Sans",
      "Segoe UI",
      BlinkMacSystemFont,
      system-ui,
      -apple-system
    );
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
  }

  /* Input, Textarea */
  .pure-material-textfield-outlined > input,
  .pure-material-textfield-outlined > textarea {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px; /* Safari */
    border-color: rgba(var(0, 0, 0, 0.56));
    border-top-color: transparent;
    border-radius: 4px;
    padding: 15px 13px 15px;
    width: 100%;
    height: inherit;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    transition: border 0.2s, box-shadow 0.2s;
  }

  /* Span */
  .pure-material-textfield-outlined > input + span,
  .pure-material-textfield-outlined > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    border-color: rgba(var(0, 0, 0, 0.56));
    width: 100%;
    max-height: 100%;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    font-size: 75%;
    line-height: 15px;
    cursor: text;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

  /* Corners */
  .pure-material-textfield-outlined > input + span::before,
  .pure-material-textfield-outlined > input + span::after,
  .pure-material-textfield-outlined > textarea + span::before,
  .pure-material-textfield-outlined > textarea + span::after {
    content: "";
    display: block;
    box-sizing: border-box;
    margin-top: 6px;
    border-top: solid 1px;
    border-top-color: rgba(var(0, 0, 0, 0.56));
    min-width: 10px;
    height: 8px;
    pointer-events: none;
    box-shadow: inset 0 1px transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .pure-material-textfield-outlined > input + span::before,
  .pure-material-textfield-outlined > textarea + span::before {
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }

  .pure-material-textfield-outlined > input + span::after,
  .pure-material-textfield-outlined > textarea + span::after {
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 4px;
  }

  /* Hover */
  .pure-material-textfield-outlined:hover > input,
  .pure-material-textfield-outlined:hover > textarea {
    border-color: rgba(var(0, 0, 0, 0.56));
    border-top-color: transparent;
  }

  .pure-material-textfield-outlined:hover > input + span::before,
  .pure-material-textfield-outlined:hover > textarea + span::before,
  .pure-material-textfield-outlined:hover > input + span::after,
  .pure-material-textfield-outlined:hover > textarea + span::after {
    border-top-color: rgba(var(0, 0, 0, 0.56));
  }

  .pure-material-textfield-outlined:hover > input:not(:focus):placeholder-shown,
  .pure-material-textfield-outlined:hover
    > textarea:not(:focus):placeholder-shown {
    border-color: rgba(var(0, 0, 0, 0.56));
  }

  /* Placeholder-shown */
  .pure-material-textfield-outlined > input:not(:focus):placeholder-shown,
  .pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown {
    border-top-color: rgba(0, 0, 0, 0.56);
  }

  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span,
  .pure-material-textfield-outlined
    > textarea:not(:focus):placeholder-shown
    + span {
    font-size: inherit;
    line-height: 68px;
  }

  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > textarea:not(:focus):placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span::after,
  .pure-material-textfield-outlined
    > textarea:not(:focus):placeholder-shown
    + span::after {
    border-top-color: transparent;
  }

  /* Focus */
  .pure-material-textfield-outlined > input:focus,
  .pure-material-textfield-outlined > textarea:focus {
    border-color: #ff8822;
    border-top-color: transparent;
    box-shadow: inset 1px 0 #ff8822;
    outline: none;
  }

  .pure-material-textfield-outlined > input:focus + span,
  .pure-material-textfield-outlined > textarea:focus + span {
    color: #ff8822;
  }

  .pure-material-textfield-outlined > input:focus + span::before,
  .pure-material-textfield-outlined > input:focus + span::after,
  .pure-material-textfield-outlined > textarea:focus + span::before,
  .pure-material-textfield-outlined > textarea:focus + span::after {
    border-top-color: #ff8822 !important;
    box-shadow: inset 0 1px #ff8822;
  }

  /* Disabled */
  .pure-material-textfield-outlined > input:disabled,
  .pure-material-textfield-outlined > input:disabled + span,
  .pure-material-textfield-outlined > textarea:disabled,
  .pure-material-textfield-outlined > textarea:disabled + span {
    border-color: #ff8822 !important;
    border-top-color: transparent !important;
    color: #ff8822;
    pointer-events: none;
  }

  .pure-material-textfield-outlined > input:disabled + span::before,
  .pure-material-textfield-outlined > input:disabled + span::after,
  .pure-material-textfield-outlined > textarea:disabled + span::before,
  .pure-material-textfield-outlined > textarea:disabled + span::after {
    border-top-color: #ff8822 !important;
  }

  .pure-material-textfield-outlined > input:disabled:placeholder-shown,
  .pure-material-textfield-outlined > input:disabled:placeholder-shown + span,
  .pure-material-textfield-outlined > textarea:disabled:placeholder-shown,
  .pure-material-textfield-outlined
    > textarea:disabled:placeholder-shown
    + span {
    border-top-color: #ff8822 !important;
  }

  .pure-material-textfield-outlined
    > input:disabled:placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > input:disabled:placeholder-shown
    + span::after,
  .pure-material-textfield-outlined
    > textarea:disabled:placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > textarea:disabled:placeholder-shown
    + span::after {
    border-top-color: transparent !important;
  }

  /* Faster transition in Safari for less noticable fractional font-size issue */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .pure-material-textfield-outlined > input,
      .pure-material-textfield-outlined > input + span,
      .pure-material-textfield-outlined > textarea,
      .pure-material-textfield-outlined > textarea + span,
      .pure-material-textfield-outlined > input + span::before,
      .pure-material-textfield-outlined > input + span::after,
      .pure-material-textfield-outlined > textarea + span::before,
      .pure-material-textfield-outlined > textarea + span::after {
        transition-duration: 0.1s;
      }
    }
  }
  .content-enter-login {
    display: flex;
    height: 246px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-enter-login a {
    text-decoration: none;
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
    margin-top: 4%;

    position: absolute;
    height: 24px;
    left: 40.48%;
    right: 40.41%;
    width: 48%;
    top: calc(44% - 24px / 2 + 321px);
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.56);
  }
  @media only screen and (min-width: 320px) and (max-width: 620px) {
    form {
      width: 80%;
      margin-top: 12%;
    }
    .content-enter-login {
      height: 177px;

      a {
        top: 480px;
      }
    }
    .footer {
      margin-top: 6%;
      position: absolute;
      height: 24px;
      left: 16.48%;
      right: 40.41%;
      width: 74%;
      top: calc(44% - 24px / 2 + 321px);
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.56);
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 328px;
  height: 48px;
  left: 519px;
  top: 509px;
  background: #ff8822;
  border: 2px solid #ff8822;
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

  @media only screen and (min-width: 320px) and (max-width: 620px) {
    position: inherit;
  }
`;
