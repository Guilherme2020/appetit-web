import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 41px;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 45px;
    padding-right: 6%;
    padding-top: 5%;
  }
  @media only screen and (min-width: 320px) and (max-width: 620px) {
    display: none;
  }
`;
