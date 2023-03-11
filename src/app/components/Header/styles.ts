import styled from "styled-components";

export const StyledHeader = styled.header`
  @media (min-width: 852px) {
    padding-left: 144px;
    padding-right: 144px;
  }
  @media (max-width: 852px) {
  }
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  top: 0px;
  left: auto;
  right: 0px;
  background-color: rgb(245, 245, 245);
  color: rgba(0, 0, 0, 0.87);
  z-index: 1200;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: none;
`;
export const StyledContainer = styled.div`
  @media (min-width: 852px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  @media (min-width: 1152px) {
    max-width: 1152px;
  }
  @media (min-width: 552px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 24px;
`;

export const StyledNav = styled.nav`
  @media (max-width: 852px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  gap: 32px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  z-index: 1400;
  flex-wrap: nowrap;
  a {
    margin: 0px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
    border-bottom: 1px solid transparent;
    white-space: nowrap;
  }
`;

export const StyledSideNav = styled.nav`
  align-items: baseline;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: end;
  justify-content: flex-end;
  gap: 16px;
`;

export const StyledBrandWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 172px;
`;
