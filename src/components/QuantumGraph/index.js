/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useRef, useEffect, useCallback } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Graph from "./graph";

import Steps from "components/Steps";

import "./index.css";

function QuantumGraph() {
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);
  const [protocol, setProtocol] = useState(1);
  const [step, setStep] = useState(0);
  const [noise, setNoise] = useState(1);

  useEffect(() => {
    const el = ref.current;
  }, [ref]);

  const handleProtocolChange = (eProtocol) => {
    setProtocol(eProtocol);
  };

  const handleStepChange = (eStep) => {
    setStep(eStep);
  };

  const handleNoiseChange = (eStep) => {
    setNoise(eStep);
  };

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: 0.5,
                mr: 1,
              }}
            >
              sensors
            </Icon>
            Counterfactual Quantum Full-Duplex Communications
          </MDTypography>

          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Grid container style={{ textAlign: "justify" }} spacing={5}>
              <Grid item md={12}>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  Counterfactual quantum full-duplex communication is a way of exchanging classical
                  or quantum information between two remote parties simultaneously without the
                  transmission of any information-carrying particles through the quantum channel. It
                  is achieved through the use of counterfactual electron-photon interaction gates.
                  Due to the unique property of communication without transmitting any physical
                  particle over the channel, it chan provide inherent security advantages over most
                  of eavesdropping attacks such as the photon-number splitting attack and the
                  intercept-and-resend attack.
                </MDTypography>
              </Grid>
              {/* <Grid item md={6}>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  This makes quantum communication ideal for sending sensitive information, such as
                  financial transactions or military secrets. Finally, quantum communication has the
                  potential to revolutionize computing. Quantum computers are faster and more
                  powerful than classical computers, and they rely on quantum communication to
                  operate.
                </MDTypography>
              </Grid> */}
            </Grid>
          </MDBox>

          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Grid container style={{ textAlign: "justify" }} spacing={5}>
              <Grid item md={12}>
                <div>
                  <Steps
                    onProtocolChange={handleProtocolChange}
                    onStepChange={handleStepChange}
                    onNoiseChange={handleNoiseChange}
                  />
                  {/* <BlochSphere theta="100" phi="100" /> */}
                </div>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>

        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
      </MDBox>
      <MDBox>
        <div style={{ position: "relative", height: "600px" }}>
          <Graph protocol={protocol} steps={step} noise={noise} />
        </div>
      </MDBox>
    </Card>
  );
}

export default QuantumGraph;
