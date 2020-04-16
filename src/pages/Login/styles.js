import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4%;

    .welcome-title {
      height: 36px;
      top: calc(50% - 36px / 2 - 146px);

      text-align: center;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 36px;
      color: rgba(0, 0, 0, 0.87);
    }

    .text-description {
      height: 48px;
      text-align: center;
      width: 59%;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      top: calc(50% - 48px / 2 - 88px);
      color: rgba(0, 0, 0, 0.54);
    }
  }
`;
