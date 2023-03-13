import styled from "styled-components";

export const StyledHamburger = styled.div`
  text-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 100%;
  transition-timing-function: ease-in;
  transition: 2s;
  transform: translateX(-100%);
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #f9f5f2;
  display: flex;
  flex-direction: column;
  z-index: 1500;
  button {
    width: 50px;
    background: none;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 20px;
  cursor: pointer;
`;
