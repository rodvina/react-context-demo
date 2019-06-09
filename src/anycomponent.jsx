import React, { Component, useState } from "react";
import ThemeContext from "./theme-context";
import ThemedButton from "./themedbutton";

const AnyComponent = () => {
  const [theme, setTheme] = useState("light");
  const [themes, setThemes] = useState(["light", "dark"]);

  const handleSelect = evt => {
    console.log("Changing value to " + evt.target.value);
    setTheme(evt.target.value);
  };

  return (
    <React.Fragment>
      <h2>Any component</h2>
      <select value={theme} onChange={handleSelect}>
        {themes.map(t => (
          <option value={t}>{t}</option>
        ))}
      </select>
      <div>Selected theme: {theme}</div>
      <ThemeContext.Provider value={theme}>
        <ThemedButton />
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default AnyComponent;
