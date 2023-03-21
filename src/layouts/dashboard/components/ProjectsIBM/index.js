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

import { useState, useRef, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";
import "./style.css"
import Iframe from 'react-iframe'

function ProjectsIBM() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    console.log(el);
  }, [ref]);

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
            IBM Quantum Lab Project Overview
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            {/* <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon> */}
            <MDTypography variant="button" fontWeight="regular" color="text">
            we demonstrate that a careful circuit decomposition allows us to experimentally implement a vast number of fundamental open quantum systems models for one and two qubits. Not only are we able to generate different classes of open quantum dynamics, namely, unital (e.g., pure dephasing dynamical maps), non-unital (e.g., amplitude damping dynamical maps), phase covariant, and non-phase covariant (e.g., Pauli dynamical maps), but also we can explore the Markovian to non-Markovian crossover, including the recently discovered examples of essential16 and eternal54,55 non-Markovianity.
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
      <MDBox>
        <div className="block2">
          <Iframe url="https://quantum-computing.ibm.com/composer/files/new?initial=N4IgdghgtgpiBcICqYAuBLVAbGATABAMboBOhArpiADQgCOEAzlAiAPIAKAogHICKAQQDKAWXwAmAHQAGANwAdMOjCEs5XDHzz6MLOgBGARknLC2hWEV0SMAOb46AbQAsAXQuEb9wi-eKAHg6O0n5gAF5B4qEAFkGGoSRhYQAUAA7oAPTiAJSRrtRBAMyhEU7xFvoQJCToMCQOsvgZGfgAAqnRTDAAIuiMANaKsEzkNkEh%2BAC0AHxEwe40IBqMnuipGAD2YKwgAL5AA"
            width="100%"
            height="920"
            id="framenn"
            className=""
            display="block"
            position="overflow"
            frameBorder="0"
            scrolling="no"
            />
        </div>
      </MDBox>
    </Card>
  );
}

export default ProjectsIBM;
