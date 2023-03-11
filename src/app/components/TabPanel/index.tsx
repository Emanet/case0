import React, { useState } from "react";
import Slider from "../Slider";
import Tab from "../Tab";
import { StyledButton, StyledNav } from "./styles";
import { PED_TABS, PED_TYPES } from "@/app/features/value/type";

type Props = {};

function TabPanel({}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <StyledNav>
          <StyledButton className={`${activeTab === 0 && "focused-button" }`}  onClick={() => setActiveTab(0)}>
            beije Ped
          </StyledButton>
          <StyledButton className={`${activeTab === 1 && "focused-button" }`}  onClick={() => setActiveTab(1)}>
            beije Günlük Ped
          </StyledButton>
          <StyledButton className={`${activeTab === 2 && "focused-button" }`}  onClick={() => setActiveTab(2)}>
            beije Tampon
          </StyledButton>
      </StyledNav>
      <Tab activeTab={activeTab} eventKey={0}>
        <Slider
          tabName={PED_TABS.PED}
          title={PED_TYPES.PED.STANDART}
          max={60}
        />
        <Slider tabName={PED_TABS.PED} title={PED_TYPES.PED.SUPER} max={60} />
        <Slider
          tabName={PED_TABS.PED}
          title={PED_TYPES.PED.SUPER_PLUS}
          max={60}
        />
      </Tab>
      <Tab activeTab={activeTab} eventKey={1}>
        <Slider
          tabName={PED_TABS.DAILY_PED}
          title={PED_TYPES.DAILY.DAILY}
          max={100}
        />
        <Slider
          tabName={PED_TABS.DAILY_PED}
          title={PED_TYPES.DAILY.SUPER_DAILY}
          max={100}
        />
      </Tab>
      <Tab activeTab={activeTab} eventKey={2}>
        <Slider
          tabName={PED_TABS.TAMPON}
          title={PED_TYPES.TAMPON.MINI}
          max={60}
        />
        <Slider
          tabName={PED_TABS.TAMPON}
          title={PED_TYPES.TAMPON.STANDART}
          max={60}
        />
      </Tab>
    </div>
  );
}

export default TabPanel;
