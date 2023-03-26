import { Steps, Panel, ButtonGroup, Button } from "rsuite";
import React, { useState } from "react";
import "rsuite/dist/rsuite.css";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BlochSphere from "components/BlochSphere";
import bloch from "assets/images/bloch3.png";
import MDBox from "components/MDBox";

export default function StepsComponent({}) {
  const [step, setStep] = useState(0);
  const [protocol, setProtocol] = useState(1);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  const handleChange = (event) => {
    setProtocol(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const floatingBloch = () => {
    return (
      <div style={{ position: "relative", marginTop: 30 }}>
        <Button appearance="primary" onClick={() => setIsOpen(!isOpen)}>
          {"Open Bloch Sphere ->"}
        </Button>

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            display: isOpen ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setIsOpen(false)}
        >
          <BlochSphere />
        </div>
      </div>
    );
  };
  const generateDesc = (protocol) => {
    //Switch
    switch (protocol) {
      case 1:
        return "Quantum state teleportation is a form of quantum communication that allows the transfer of a quantum state from one location to another. The basic process involves three parties: the sender, the receiver, and an entangled pair of qubits.";
      case 2:
        return "Quantum Anonymous Private Information Retrieval (QAPIR) is a quantum cryptographic protocol that enables a user to retrieve information from a database anonymously and privately, without revealing to the database which information was requested or who requested it.";
      case 3:
        return "Quantum Anonymous Collision Detection (QACD) is a quantum cryptographic protocol that allows two parties to check if they have a matching item in their respective private sets, without revealing any information about their sets to each other.";
      default:
        return "Quantum state teleportation is a form of quantum communication that allows the transfer of a quantum state from one location to another. The basic process involves three parties: the sender, the receiver, and an entangled pair of qubits.";
    }
  };

  const generateContentSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <Grid container style={{ textAlign: "justify" }} spacing={5}>
              <Grid item md={6}>
                <MDTypography variant="button" fontWeight="medium" color="text">
                  Select Desired Protocol Based on CQILAB Research
                </MDTypography>
                {/* <SelectPicker data={data} block /> */}
                <br />
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: "100%", marginTop: 3, marginBottom: 3 }}
                >
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={protocol}
                    onChange={handleChange}
                    // label="Age"
                  >
                    <MenuItem value={1}>Quantum State Teleportation</MenuItem>
                    <MenuItem value={2}>
                      Quantum Anonymous Private Information Retrieval (QAPIR)
                    </MenuItem>
                    <MenuItem value={3}>Quantum Anonymous Collision Detection</MenuItem>
                  </Select>
                </FormControl>
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  style={{ fontSize: 12 }}
                >
                  {generateDesc(protocol)}
                </MDTypography>
              </Grid>
              <Grid item md={2} mr={3} mt={-4}>
                <MDTypography variant="button" fontWeight="medium" color="text">
                  Set Quantum State (Optional)
                </MDTypography>
                <br />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  style={{ fontSize: 12 }}
                >
                  Select the quantum state angle to be used in the protocol
                </MDTypography>
                {floatingBloch()}
                {/* <BlochSphere /> */}
              </Grid>
              <Grid item md={2} mr={3} mt={-7}>
                <MDBox
                  component="img"
                  src={bloch}
                  alt="Brand"
                  width="22rem"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </Grid>
            </Grid>
          </div>
        );
      case 1:
        return <div>Map Definition</div>;
      case 2:
        return <div>Processing</div>;
      case 3:
        return <div>Result</div>;
      default:
        return <div>Protocol</div>;
    }
  };

  return (
    <div style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
      <Steps current={step}>
        <Steps.Item title="Protocol & State" />
        <Steps.Item title="Map Definition" />
        <Steps.Item title="Processing" />
        <Steps.Item title="Result" />
      </Steps>
      <hr />
      <Panel style={{ marginTop: -20 }} header={`Step: ${step + 1}`}>
        {generateContentSteps(step)}
      </Panel>
      <hr />
      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 3}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}
