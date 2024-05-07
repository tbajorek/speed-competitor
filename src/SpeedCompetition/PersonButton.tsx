import { FC, MouseEvent, TouchEvent } from "react";
import Button from "react-bootstrap/Button";
import { ButtonClickDetails } from "./ButtonClickDetails.types";

interface PersonButtonProperties {
  className: string;
  label: string;
  onButtonClick: (details: ButtonClickDetails) => void;
}

const PersonButton: FC<PersonButtonProperties> = ({
  className,
  label,
  onButtonClick,
}) => {
  const clickHandler = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ) => {
    const button: HTMLButtonElement = e.target as HTMLButtonElement;
    const details: ButtonClickDetails = {
      label: button.innerText,
      date: new Date(),
    };
    onButtonClick(details);
  };
  return (
    <Button
      className={className}
      onTouchStart={clickHandler}
      onMouseDown={clickHandler}
    >
      {label}
    </Button>
  );
};

export default PersonButton;
