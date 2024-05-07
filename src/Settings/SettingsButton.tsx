import { FC } from "react";
import { Button } from "react-bootstrap";
import { Gear } from "react-bootstrap-icons";

interface SettingsButtonProperties {
  opened: boolean;
  onToggleSettings: () => void;
}

const SettingsButton: FC<SettingsButtonProperties> = ({
  opened,
  onToggleSettings,
}) => {
  return (
    <Button
      className="settingsButton"
      variant={opened ? "light" : "secondary"}
      onClick={onToggleSettings}
    >
      <Gear />
    </Button>
  );
};

export default SettingsButton;
