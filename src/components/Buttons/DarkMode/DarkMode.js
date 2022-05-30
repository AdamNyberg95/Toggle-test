import React from "react";
import "../DarkMode/darkMode.css";

const DarkMode = ({ onClick }) => {
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  return (
    <div>
      <label class="toggle" for="myToggle">
        <input
          onClick={switchTheme}
          class="toggle__input"
          name=""
          type="checkbox"
          id="myToggle"
        />
        <div class="toggle__fill"></div>
      </label>
    </div>
  );
};

export default DarkMode;
