import styled from "styled-components";

export const StyledCard = styled.div`
  @media (max-width: 415px) {
    width: 80%;
    margin: 0 auto;
  }
  font-size: 12px;
  -webkit-box-shadow: 1px -1px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px -1px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 1px -1px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-style: normal;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(52, 49, 49);
  border-radius: 64px;
  text-transform: none;
  padding: 10px 0px 8px;
  font-size: 0.875rem;
  line-height: 171%;
  letter-spacing: -0.01em;
`;
