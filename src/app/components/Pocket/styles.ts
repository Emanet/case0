import styled from "styled-components";

export const StyledSpecialPocketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4.5rem;
  background: rgb(255, 255, 255);
  svg {
    margin-left: 1rem;
  }
`;
export const StyledSpecialPocket = styled.div`
  @media (max-width: 415px) {
    padding: 3rem 0 3rem 0;
  }
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`;
export const StyledSpecialPocketTitle = styled.span`
  @media (max-width: 415px) {
    width: 80%;
    margin: 0 auto;
  }

  margin: 0px;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 130%;
`;
export const StyledAddPocketButton = styled.button`
  @media (max-width: 415px) {
    width: 80%;
    margin: 0 auto;
  }
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
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
  padding: 12px 22px 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(52, 49, 49);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  width: 100%;
  border-radius: 64px;
  text-transform: none;
  font-size: 1rem;
  line-height: 162%;
  letter-spacing: -0.015em;
`;

export const StyledDeliveryInfo = styled.span`
  margin: 0px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  letter-spacing: -0.01em;
  padding: 1rem;
`;

export const StyledDeliveryInfoBox = styled.div`
  @media (max-width: 415px) {
    width: 80%;
    margin: 0 auto;
  }
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 3%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 5px 15px;
  gap: 16px;
  border-radius: 8px;
  width: 100%;
`;

export const StyledImg = styled.img`
  @media (max-width: 415px) {
    width: 80%;
    margin: 0 auto;
  }
`;
