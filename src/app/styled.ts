import styled from "styled-components";

export const StyledMain = styled.main`
  @media (min-width: 852px) {
    padding-top: 80px;
  }
  background-color: #f9f5f2;
`;
export const StyledContainer = styled.div`
  @media (min-width: 1152px) {
    max-width: 1152px;
  }
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding: 152px 0px 96px !important;
  background-color: rgb(249, 245, 242);
`;

export const StyledBoxes = styled.div`
  @media (max-width: 852px) {
    flex-direction: column;
    align-items: center;
    margin: 0 2rem 0 2rem;
  }
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px;
  gap: 7.625rem;
`;

export const StyledCreateOwnPocket = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4.5rem;
`;

export const StyledBody = styled.body`
  font-family: Gordita !important;
  margin: 0;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  font-style: normal;
  a {
    text-decoration: none;
  }
`;
