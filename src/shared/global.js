import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

//ver donde agregar esto: <link rel="preconnect" href="https://fonts.gstatic.com">
export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,700&family=Roboto:wght@400;700&display=swap";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  color: ${color.darkest};
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
