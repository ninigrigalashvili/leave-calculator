import React from "react";
import "normalize.css";
import "antd/dist/antd.variable.min.css";
import Wrapper from "./components/Wrapper";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

function App() {
  return (
    <StyledThemeProvider theme={{ mode: "default" }}>
      <Wrapper />
    </StyledThemeProvider>
  );
}

export default App;
