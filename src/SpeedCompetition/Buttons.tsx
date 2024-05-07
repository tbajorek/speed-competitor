import { FC } from "react";
import PersonButton from "./PersonButton";
import { ButtonClickDetails } from "./ButtonClickDetails.types";
import { SettingsType } from "../Settings/Settings.types";

interface ButtonsProperties extends SettingsType {
  onButtonClick: (details: ButtonClickDetails) => void;
}

const Buttons: FC<ButtonsProperties> = ({
  firstName,
  secondName,
  onButtonClick,
}) => {
  return (
    <div className="buttons">
      <PersonButton
        className="red"
        label={firstName || ""}
        onButtonClick={onButtonClick}
      />
      <PersonButton
        className="green"
        label={secondName || ""}
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default Buttons;
