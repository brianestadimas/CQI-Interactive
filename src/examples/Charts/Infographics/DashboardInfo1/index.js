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

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// DashboardInfo1 configurations
import Iframe from "react-iframe";
import Grid from "@mui/material/Grid";

function DashboardInfo1({ color, title, description, date }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <Iframe
              url="https://www.youtube.com/embed/bEbWEEWYBpE"
              width="100%"
              height="200"
              id="framenn"
              className=""
              display="block"
              position="overflow"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              styles={{ marginTop: -40 }}
            />
          ),
          [color]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            <Grid container spacing={8}>
              <Grid item md={1}>
                <MDBox
                  mt={1}
                  variant="gradient"
                  bgColor="dark"
                  color="light"
                  coloredShadow="dark"
                  borderRadius="xl"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3rem"
                  height="3rem"
                >
                  <Icon fontSize="medium" color="inherit">
                    weekend
                  </Icon>
                </MDBox>
              </Grid>
              <Grid item md={10} mt={1}>
                Develop Solutions for{" "}
                <b>Quantum Information Science, Wireless Communication and Machine Intelligence</b>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item md={1}>
                <MDBox
                  mt={1}
                  variant="gradient"
                  bgColor="primary"
                  color="light"
                  coloredShadow="dark"
                  borderRadius="xl"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3rem"
                  height="3rem"
                >
                  <Icon fontSize="medium" color="inherit">
                    leaderboard
                  </Icon>
                </MDBox>
              </Grid>
              <Grid item md={10} mt={1}>
                Design, Analysis, and Advance for <b>Quantum Information Science</b>
              </Grid>
            </Grid>
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <Grid container spacing={8}>
              <Grid item md={8}>
                <MDTypography
                  variant="button"
                  color="text"
                  lineHeight={1}
                  sx={{ mt: 0.15, mr: 0.5 }}
                >
                  <Icon>schedule</Icon>
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="light">
                  {date},{" "}
                  <span style={{ color: "blue", textDecoration: "underline" }}> Read More</span>
                </MDTypography>
              </Grid>
              <Grid item md={4} justifyContent="flex-end">
                {/* <MDButton variant="gradient" color="info" size="small">
                  Read&nbsp;more
                </MDButton> */}
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DashboardInfo1
DashboardInfo1.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the DashboardInfo1
DashboardInfo1.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
};

export default DashboardInfo1;
