import { PED_TABS } from "@/app/features/value/type";
import { useSelector } from "react-redux";
import Card from "../Card";
import {
  StyledAddPocketButton,
  StyledDeliveryInfo,
  StyledDeliveryInfoBox,
  StyledSpecialPocket,
  StyledSpecialPocketContainer,
  StyledSpecialPocketTitle,
} from "./styles";
import { RootState } from "@/app/store";

type Props = {};

export default function Pocket({}: Props) {
  const { items } = useSelector(
    (state: RootState) => state.counter
  );

  const dailyPedItems = items["günlük ped"];
  const pedItems = items["ped"];
  const tamponItems = items["tampon"];
  let total = 0;

  /*   Object.keys(items).forEach((key) => {
    Object.values(items[key]).forEach((item) => {
      total += item.totalPrice;
    });
  }); */
  Object.keys(items).forEach((key) => {
    Object.values(items[key]).forEach((item) => {
      total += item.totalPrice;
    });
  });

  return (
    <StyledSpecialPocketContainer>
      <div>
        <StyledSpecialPocket>
          <StyledSpecialPocketTitle>Özel Paketin</StyledSpecialPocketTitle>
          <StyledDeliveryInfoBox>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              strokeWidth="1"
            >
              <path
                d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3"
                stroke="#343131"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <StyledDeliveryInfo>2 ayda 1 gönderim</StyledDeliveryInfo>
          </StyledDeliveryInfoBox>
          <img
            src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=828&q=75"
            alt=""
          />
          {!Object.values(dailyPedItems).every((item) => {
            return item.count == 0;
          }) && <Card title={PED_TABS.DAILY_PED} items={dailyPedItems} />}

          {!Object.values(pedItems).every((item) => {
            return item.count == 0;
          }) && <Card title={PED_TABS.PED} items={pedItems} />}

          {!Object.values(tamponItems).every((item) => {
            return item.count == 0;
          }) && <Card title={PED_TABS.TAMPON} items={tamponItems} />}

          <StyledAddPocketButton>
            Sepete Ekle {`${" ₺ " + total}`}
          </StyledAddPocketButton>
        </StyledSpecialPocket>
      </div>
    </StyledSpecialPocketContainer>
  );
}
