import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "@/app/features/value/valueSlice";
import { StyledButton, StyledCard } from "./styles";
import { IPedItem } from "@/app/features/value/type";

type Props = {
  title: string;
  items: Record<string,IPedItem>
};

export default function Card({ title, items }: Props) {
  const dispatch = useDispatch();
  const itemKeys = Object.keys(items).filter(
    (key) => items[key].count.toString() !== "0"
  );
  const cardPocket = itemKeys.map((key, index) => {
    if (!items[key].count) return null;
    return (
      <div key={key}>
        <span>
          {key} {items[key].count}
        </span>
        {index < itemKeys.length - 1 && (
          <span style={{ marginLeft: "0.5ch", marginRight: "0.5ch" }}>ve</span>
        )}
      </div>
    );
  });
  return (
    <StyledCard>
      {title
        .split(" ")
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1)) +
        " Paketleri"}
      <div style={{ display: "flex" }}>{cardPocket}</div>
      <StyledButton onClick={() => dispatch(deleteItem(title))}>
        Paketten Çıkar
      </StyledButton>
    </StyledCard>
  );
}
