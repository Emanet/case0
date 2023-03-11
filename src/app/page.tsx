"use client";
import CreatePocket from "./components/CreatePocket";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pocket from "./components/Pocket";

import { StyledBoxes, StyledContainer, StyledMain } from "./styled";

export default function Home() {
  return (
    <>
      <StyledMain>
        <Header />
        <StyledContainer>
          <StyledBoxes>
            <CreatePocket />
            <Pocket />
          </StyledBoxes>
        </StyledContainer>
        <Footer />
      </StyledMain>
    </>
  );
}
