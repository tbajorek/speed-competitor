import { useState } from "react";
import { Container } from "react-bootstrap";
import SpeedCompetition from "./SpeedCompetition";
import Settings from "./Settings";
import SettingsButton from "./Settings/SettingsButton";
import { SettingsType } from "./Settings/Settings.types";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState<string | null>();
  const [secondName, setSecondName] = useState<string | null>();
  const [showSettings, setShowSettings] = useState(!(firstName && secondName));

  const changeSettingsHandler = (settings: SettingsType) => {
    setFirstName(settings.firstName);
    setSecondName(settings.secondName);
    setShowSettings(false);
  };

  const toggleSettingsHandler = () => {
    if (firstName && secondName) {
      setShowSettings((showBefore) => !showBefore);
    }
  };

  return (
    <Container className="p-3 app">
      <SettingsButton
        onToggleSettings={toggleSettingsHandler}
        opened={showSettings}
      />
      {showSettings && (
        <Settings
          onChangeSettings={changeSettingsHandler}
          initialFirstName={firstName || ''}
          initialSecondName={secondName || ''}
        />
      )}
      {!showSettings && firstName && secondName && (
        <SpeedCompetition firstName={firstName} secondName={secondName} />
      )}
    </Container>
  );
}
