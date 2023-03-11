import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { StyledHamburgerButton, StyledHamburgerIcon } from "./styled";

type Props = {};

const HamburgerButton = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
        <StyledHamburgerButton onClick={() => setIsActive(!isActive)}>
          <StyledHamburgerIcon></StyledHamburgerIcon>
          <StyledHamburgerIcon></StyledHamburgerIcon>
          <StyledHamburgerIcon></StyledHamburgerIcon>
        </StyledHamburgerButton>
      {isActive && <Hamburger setIsActive={setIsActive} />}
    </>
  );
};

export default HamburgerButton;
