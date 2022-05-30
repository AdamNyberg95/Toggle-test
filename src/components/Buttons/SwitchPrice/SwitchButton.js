import * as React from "react";
import "../SwitchPrice/switchButton.css";

const SwitchButton = ({ onClick }) => {
  return (
    <div>
      <label class="togglee" for="myTogglee">
        <input
          onClick={onClick}
          class="togglee__input"
          name=""
          type="checkbox"
          id="myTogglee"
        />
        <div class="togglee__fill"></div>
      </label>
    </div>
  );
};

export default SwitchButton;
