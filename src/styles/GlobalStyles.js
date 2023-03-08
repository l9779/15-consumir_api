import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: none;
}
body {
  font-family: sans-serif;
  color: ${colors.primaryDarkColor};
  background-color: ${colors.primaryDarkColor};
}
html, border-style, #root {
  height: 100%;
}
button {
  cursor: pointer;
  background-color: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;
}
button:hover {
  filter: brightness(85%);
}
a {
  text-decoration: none;
  color: ${colors.primaryColor};
}
ul {
  list-style: none;
}

.Toastify__progress-bar--success{
  background-color: ${colors.successColor};
}

.Toastify__progress-bar--error{
  background-color: ${colors.errorColor};
}

.Toastify__progress-bar--warning{
  background-color: ${colors.warningColor};
}
`;

export const Container = styled.section`
  max-width: 480px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
