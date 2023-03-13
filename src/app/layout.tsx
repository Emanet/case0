"use client";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./registry";
import { store } from "./store";
import { StyledBody } from "./styled";
import "./styles/App.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <StyledComponentsRegistry>
        <StyledBody>
          <Provider store={store}>{children}</Provider>
        </StyledBody>
      </StyledComponentsRegistry>
    </html>
  );
}
