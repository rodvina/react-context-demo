import React, { Component } from "react";
import ThemeContext from "./theme-context";

const ThemedButton = () => {
  return (
    <ThemeContext.Consumer>
      {da => <button>button with theme: {da}</button>}
    </ThemeContext.Consumer>
  );
};

export default ThemedButton;
