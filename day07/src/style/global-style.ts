import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border: 0px;
    vertical-align: baseline;
    color: rgb(26, 27, 28);
    max-width: 100%;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }

  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  @media (width >= 1024px) {
    .visible-on-mobile {
      display: none;
    }
  }
  @media (width < 1024px) {
    .visible-on-PC {
      display: none;
    }
  }
`;
