import { setItemCount } from "@/app/features/value/valueSlice";
import { RootState } from "@/app/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledInput, StyledSlider } from "./styles";
import "./styles.css";
type Props = {
  title: string;
  max: number;
  tabName: string;
};

function Slider({ title, tabName, max }: Props) {
  const items = useSelector((state: RootState) => state.counter.items);

  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setItemCount({
        tab: tabName,
        ped: title,
        count: parseInt(e.target.value),
      })
    );
  };
  return (
    <StyledSlider>
      <span>{title}</span>
      <br />
      <StyledInput
        id="range-slider__range"
        onChange={onChange}
        type="range"
        min="0"
        max={max}
        step={10}
        value={items[tabName][title].count}
      />
      <span> {items[tabName][title].count}</span>
    </StyledSlider>
  );
}

export default Slider;
