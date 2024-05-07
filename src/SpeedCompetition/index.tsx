import { FC, useState, MouseEvent } from "react";
import Buttons from "./Buttons";
import Result from "./Result";
import { ButtonClickDetails } from "./ButtonClickDetails.types";
import { SpeedCompetitionProperties } from "./SpeedCompetition.types";

const SpeedCompetition: FC<SpeedCompetitionProperties> = ({
  firstName,
  secondName,
}) => {
  const [winner, setWinner] = useState<string | null>(null);

  const clickHandler = (details: ButtonClickDetails) => {
    setWinner((oldWinner: string | null) => {
      if (!oldWinner) {
        return details.label;
      }
      return oldWinner;
    });
  };

  const resetHandler = (e: MouseEvent<HTMLElement>) => {
    setWinner(null);
  };

  if (winner) {
    return <Result winner={winner} onResetWinner={resetHandler} />;
  }
  return (
    <Buttons
      firstName={firstName}
      secondName={secondName}
      onButtonClick={clickHandler}
    />
  );
};

export default SpeedCompetition;
