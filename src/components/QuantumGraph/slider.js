import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import "./style.css";

export default function Slider({}) {
  const [value1, setValue1] = useState(1);

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs="4">
          <RangeSlider
            min="0"
            max="1"
            step="0.05"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            tooltip="auto"
          />
        </Col>
      </Form.Group>
    </Form>
  );
}
