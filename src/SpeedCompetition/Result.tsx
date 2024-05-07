import { FC, MouseEvent } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

interface ResultProperties {
  winner: string;
  onResetWinner: (e: MouseEvent<HTMLElement>) => void;
}

const Result: FC<ResultProperties> = ({ winner, onResetWinner }) => {
  return (
    <Container className="p-3 result">
      <Row>
        <Col>
          <b>{winner}</b> był szybszy
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={onResetWinner}>Jeszcze raz!</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Result;
