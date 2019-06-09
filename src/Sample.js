import React, { Component } from "react";
import ThemeContext from "./theme-context";
import ThemedButton from "./themedbutton";

const Sample = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
};

export default Sample;
