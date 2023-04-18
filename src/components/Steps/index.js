import { Steps, Panel, ButtonGroup, Button } from "rsuite";
import React, { useState, useEffect } from "react";
import "rsuite/dist/rsuite.css";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BlochSphere from "components/BlochSphere";
import bloch from "assets/images/bloch3.png";
import mapimg from "assets/images/bgqc.jpg";
import mapreal from "assets/images/bgqc2.png";
import MDBox from "components/MDBox";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import truthtable from "assets/images/truth-table.png";

export default function StepsComponent({ onProtocolChange, onStepChange, onNoiseChange }) {
  const [step, setStep] = useState(0);
  const [protocol, setProtocol] = useState(1);
  const [stepProcess, setStepProcess] = useState(0);
  const [noise, setNoise] = useState(1);
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
    onProtocolChange(event.target.value);
  };

  const handleNextSteps = () => {
    if (stepProcess >= 10) {
      setStep(3);
    }
    setStepProcess(stepProcess + 1);
    onStepChange(stepProcess + 1);
  };

  const handleResetSteps = () => {
    setStepProcess(0);
    onStepChange(0);
  };

  const handleChangeNoise = (event) => {
    setNoise(event.target.value);
    onNoiseChange(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [imaginaryMap, setImaginaryMap] = useState(false);

  // useEffect(() => {
  //   const pane = document.querySelector(".react-flow__pane");
  //   if (imaginaryMap) {
  //     pane.style.backgroundImage = 'url("assets/images/bgqc.jpg")';
  //   } else {
  //     pane.style.backgroundImage = 'url("assets/images/bgqc2.png")';
  //   }
  // }, [imaginaryMap]);

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
        return "A bit exchange protocol is proposed by developing the distributed controlled NOT (D-CNOT) operation. The protocol enables each party to exchange a one-bit classical information in each direction simultaneously using a single preshared Bell pair of qubits by means of counterfactual disetanglement.";
      case 2:
        return "A quantum state exchange protocol is proposed by generalizing the idea of D-CNOT operation. The protocol enables remote parties to exchange an arbitrary unknown one-qubit quantum information simultaneously without using presahred entanglement by means of counterfactual entanglement and disentanglement";
      case 3:
        return "Quantum state teleportation is a form of quantum communication that allows the transfer of a quantum state from one location to another. The basic process involves three parties: the sender, the receiver, and an entangled pair of qubits.";
      default:
        return "A bit exchange protocol is proposed by developing the distributed controlled NOT (D-CNOT) operation. The protocol enables each party to exchange a one-bit classical information in each direction simultaneously using a single preshared Bell pair of qubits by means of counterfactual disetanglement.";
    }
  };

  const generateDescNoise = (protocol) => {
    //Switch
    return "Encoding is based on quantum gate, pauli operations";
    switch (protocol) {
      case 1:
        return "Quantum state teleportation will go without noises and forming perfect fidelity.";
      case 2:
        return "This type of noise arises from the interaction of the quantum system with its environment. Environmental noise can cause decoherence, which leads to the loss of quantum coherence and the degradation of the fidelity of the quantum state being teleported.";
      case 3:
        return "This type of noise arises from the imperfections in the measurement process used to determine the quantum state of the system. Measurement noise can lead to errors in the teleportation process, as the information about the state of the system is not accurately transmitted to the receiver.";
      default:
        return "Quantum state teleportation will go without noises and forming perfect fidelity.";
    }
  };

  const generateContentSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <Grid container style={{ textAlign: "justify" }} spacing={5}>
              <Grid item md={5}>
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
                    <MenuItem value={1}>Quantum Duplex Coding</MenuItem>
                    {/* <MenuItem value={2}>Quantum Telexchanging</MenuItem> */}
                    <MenuItem value={3}>Quantum State Teleportation</MenuItem>
                    {/* <MenuItem value={2}>
                      Quantum Anonymous Private Information Retrieval (QAPIR)
                    </MenuItem>
                    <MenuItem value={3}>Quantum Anonymous Collision Detection</MenuItem> */}
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
              <Grid item md={3} mr={3} mt={-4}>
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
                  Define the amplitude amlification using bloch sphere simulator
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
        return (
          <div>
            <Grid container style={{ textAlign: "justify" }} spacing={5}>
              <Grid item md={5}>
                <MDTypography variant="button" fontWeight="medium" color="text">
                  Encoding Type
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
                    value={noise}
                    onChange={handleChangeNoise}
                    // label="Age"
                  >
                    <MenuItem value={1}>I Gate (Alice) & I Gate (Bob)</MenuItem>
                    <MenuItem value={2}>I Gate (Alice) & X Gate (Bob)</MenuItem>
                    <MenuItem value={3}>Z Gate (Alice) & I Gate (Bob)</MenuItem>
                    <MenuItem value={4}>Z Gate (Alice) & X Gate (Bob)</MenuItem>
                  </Select>
                </FormControl>
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  style={{ fontSize: 12 }}
                >
                  {generateDescNoise(noise)}
                </MDTypography>
              </Grid>
              <Grid item md={6} mr={3} mt={-4}>
                <MDTypography variant="button" fontWeight="medium" color="text">
                  What is encoding in counterfactual quantum communication?
                </MDTypography>
                <br />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  style={{ fontSize: 12 }}
                >
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: 0.5,
                      mr: 1,
                    }}
                  >
                    arrow_right_alt
                  </Icon>
                  In counterfactual full duplex quantum communication, encoding refers to the
                  process of preparing quantum states that encode the information to be transmitted.
                  <br />{" "}
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: 0.5,
                      mr: 1,
                    }}
                  >
                    arrow_right_alt
                  </Icon>
                  The encoding is done in such a way that the information can be retrieved by
                  measuring the quantum states at the receiving end.
                  <br />{" "}
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: 0.5,
                      mr: 1,
                    }}
                  >
                    arrow_right_alt
                  </Icon>
                  To ensure counterfactuality, the encoding must be done in a way that allows the
                  receiver to obtain the encoded information without actually transmitting through
                  the quantum channel.
                </MDTypography>
                {/* <div style={{ position: "relative", marginTop: 30 }}>
                  <Button appearance="primary" onClick={() => console.log("nodes added")}>
                    {"Add Node"}
                  </Button>
                  <Button
                    style={{ marginLeft: 8 }}
                    appearance="primary"
                    color="red"
                    onClick={() => console.log("nodes added")}
                  >
                    {"Remove Node"}
                  </Button>
                </div> */}
              </Grid>
              {/* <Grid item md={3} mr={3} mt={-4.5}>
                <MDTypography variant="button" fontWeight="medium" color="text">
                  (Style) Toggle Imaginary Map
                </MDTypography>
                <br />
                <MDBox
                  component="img"
                  src={mapimg}
                  alt="Brand"
                  width="16rem"
                  onClick={() => setImaginaryMap(!imaginaryMap)}
                />
              </Grid> */}
              <br />
            </Grid>
          </div>
        );
      case 2:
        return (
          <div>
            Processing
            <div style={{ position: "relative", marginTop: 30 }}>
              <Button appearance="primary" onClick={handleNextSteps}>
                {stepProcess >= 10 ? "See Results" : ">> Next Steps >>"}
              </Button>
              <Button
                style={{ marginLeft: 2 }}
                appearance="primary"
                color="red"
                onClick={handleResetSteps}
              >
                {"Restart"}
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <Grid container style={{ textAlign: "justify" }} spacing={5}>
              <Grid item md={6}>
                <MDBox component="img" src={truthtable} alt="Brand" width="40rem" />
              </Grid>
              <Grid item md={5} mr={3} mt={-4}>
                <MDTypography variant="button" fontWeight="medium" color="text">
                  Result
                </MDTypography>
                <br />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  style={{ fontSize: 12 }}
                >
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: 0.5,
                      mr: 1,
                    }}
                  >
                    arrow_right_alt
                  </Icon>
                  Bob and Alice perform local operations to decode each quantum message.
                  Specifically, Bob performs the CNOT operation followed by the Hadamard gate H to
                  decode Alice’s quantum message as |η⟩B = α |0⟩B + β |1⟩B.
                  <br />{" "}
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: 0.5,
                      mr: 1,
                    }}
                  >
                    arrow_right_alt
                  </Icon>
                  Bob then announces his ancilla measurement μ ∈ (0, 1) to Alice by classical
                  communication.
                  <br />{" "}
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: 0.5,
                      mr: 1,
                    }}
                  >
                    arrow_right_alt
                  </Icon>
                  Using Bob’s announcement, Alice finally performs the Zμ operator on her qubit to
                  decode Bob’s quantum message as |η2⟩A = γ |0⟩A + δ |1⟩A.
                </MDTypography>
              </Grid>
              <br />
            </Grid>
          </div>
        );
    }
  };

  return (
    <div style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
      <Steps current={step}>
        <Steps.Item title="Protocol & State" />
        <Steps.Item title="Encoding" />
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
        <Button onClick={onNext} disabled={step === 2}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

StepsComponent.propTypes = {
  handleProtocolChange: PropTypes.func,
  handleNoiseChange: PropTypes.func,
  handleStepChange: PropTypes.func,
};
