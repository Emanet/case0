'use client'
import { Provider } from "react-redux";
import { store } from "./store";
import { StyledBody } from "./styled";
import "./assets/style.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledBody>
        <Provider store={store}>{children}</Provider>
      </StyledBody>
    </html>
  );
}
