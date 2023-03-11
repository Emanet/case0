import React from "react";
import { StyledTab } from "./styled";

type Props = {
  eventKey: number;
  activeTab: number;
  children: React.ReactNode
};

function Tab({eventKey, children, activeTab }: Props) {
  
  if (activeTab !== eventKey) return null;
  return <StyledTab>{children}</StyledTab>;
}

export default Tab;
