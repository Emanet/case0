import styled from "styled-components";

export const StyledFooterMain = styled.footer`
  @media (min-width: 552px) {
    padding: 40px 27px;
    gap: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgb(38, 38, 38);
    color: rgb(255, 255, 255);
  }
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
  a {
    color: white;
    width: 100%;
  }
  color: white !important;
  align-items: center;
`;
export const StyledSection = styled.section`
  margin: 1rem;
  @media (max-width: 852px) {
    display: flex;
    flex-direction: column;
  }
  gap: 32px;
  place-content: center;
  display: flex;
  @media (min-width: 1152px) {
  }
  path {
    fill: rgb(255, 255, 255);
  }
`;
export const StyledNav = styled.nav`
  display: grid;
  grid-template-rows: repeat(4, 2rem);
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: -0.03em;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const StyledSocialMain = styled.div`
  @media (max-width: 852px) {
    flex-direction: column;
  }
  display: flex;
`;
export const StyledSocialMedia = styled.div`
 @media (max-width: 415px) {
  margin-left:0px;
  }
  @media (max-width: 852px) {
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
export const StyledSocialBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  p {
    margin-top: 0;
  }
`;
export const StyledFooterPolicy = styled.div`
  a {
    padding: 0px;
  }
  @media (max-width: 852px) {
    flex-direction: column;
    padding: 0;
  }
  display: flex;
  gap: 24px;
`;
export const StyledFooterPolicyContainer = styled.div`
  @media (max-width: 852px) {
    flex-direction: column;
    text-align: center;
  }
  width: 100%;
  hr {
    margin: 24px 0px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    color: #9e9e9e;
  }
`;
export const StyledFooterPolicyMain = styled.div`
  @media (max-width: 852px) {
    flex-direction: column;
    align-items: center;
  }
  display: flex;
  align-items: baseline;
  justify-content: center;
  h6 {
    margin: 0px;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: -0.03em;
    font-style: normal;
  }
`;

export const StyledLanguage = styled.button`
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
  font-style: normal;
  padding: 10px 8px 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 64px;
  text-transform: none;
  font-size: 0.875rem;
  line-height: 171%;
  letter-spacing: -0.01em;
  min-width: unset;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.498);
`;
export const StyledPaymentNetwork = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 8px;
`;
export const StyledSubscribe = styled.div`
  @media (max-width: 415px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 1152px) {
    width: 50%;
  }
  form {
    display: flex;
  }
`;

export const StyledInput = styled.input`
  @media (max-width: 414px) {
    width: 13rem;
  }
  width: 25rem;
  padding: 0.5rem;
  border: 1px solid #585858;
  background: #262626;
  border-radius: 20px;
  margin-right: 1rem;
`;
