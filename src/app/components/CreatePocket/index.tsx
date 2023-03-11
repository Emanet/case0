import { setItemCount } from "@/app/features/value/valueSlice";
import React from "react";
import { useDispatch } from "react-redux";
import TabPanel from "../TabPanel";
import { StyledTitle } from "./styles";

type Props = {};

function CreatePocket({}: Props) {
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemCount(parseInt(e.target.value)));
  };
  return (
    <div>
      <StyledTitle>
        <span>Kendi Paketini Oluştur</span>
        <a href="/know-us/how-it-works">
          <p>Nasıl Çalışır?</p>
        </a>
      </StyledTitle>
      <span>
        Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
        miktarlardan, sana özel bir paket oluşturalım.
      </span>
      <TabPanel />
    </div>
  );
}

export default CreatePocket;
