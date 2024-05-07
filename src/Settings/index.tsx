import {FC, useState, ChangeEvent, FormEvent} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SettingsType } from "./Settings.types";

interface PersonButtonProperties {
  initialFirstName: string | null;
  initialSecondName: string | null;
  onChangeSettings: (settings: SettingsType) => void;
}

const Settings: FC<PersonButtonProperties> = ({
  initialFirstName,
  initialSecondName,
  onChangeSettings,
}) => {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [secondName, setSecondName] = useState(initialSecondName);

  const changeInputHandler =
    (field: string) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const input: HTMLInputElement = e.target as HTMLInputElement;
      if (field === "firstName") {
        setFirstName(input.value);
      } else {
        setSecondName(input.value);
      }
    };

  const changeSettingsHandler = (e: FormEvent) => {
    e.preventDefault();
    if (firstName && secondName) {
      onChangeSettings({
        firstName,
        secondName,
      });
    }
    return false;
  };

  return (
    <Container className="settings">
      <Form onSubmit={changeSettingsHandler}>
        <Form.Group className="text-start" controlId="settings.firstName">
          <Form.Label>Imię pierwszej osoby</Form.Label>
          <Form.Control
            type="text"
            value={firstName || ''}
            onChange={changeInputHandler("firstName")}
          />
        </Form.Group>
        <Form.Group className="text-start" controlId="settings.secondName">
          <Form.Label>Imię drugiej osoby</Form.Label>
          <Form.Control
            type="text"
            value={secondName || ''}
            onChange={changeInputHandler("secondName")}
          />
        </Form.Group>
        <div className="p-3">
          <Button type="submit">Ustaw</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Settings;
