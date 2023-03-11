import React from "react";
import { StyledHamburger } from "./styles";

type Props = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function Hamburger({ setIsActive }: Props) {
  return (
    <StyledHamburger>
      <a href="/">Ürünler</a>
      <a href="/">Biz Kimiz</a>
      <a href="/">Bağış Kültürü</a>
      <a href="/">Blog</a>
      <a href="/">Kendi Paketini Oluştur</a>
      <button onClick={() => setIsActive(false)}>X</button>
    </StyledHamburger>
  );
}

export default Hamburger;
