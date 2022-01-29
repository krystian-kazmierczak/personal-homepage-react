import React from "react";
import ReactDOM from "react-dom";
import App from "./core/App";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./core/App/GlobalStyle";
import { theme } from "./core/App/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
