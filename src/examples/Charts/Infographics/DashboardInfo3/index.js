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
import { Img } from "react-image";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// DashboardInfo1 configurations
import Grid from "@mui/material/Grid";

function DashboardInfo2({ color, title, description, date }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox margin="-24px -10px -10px 10px">
        {useMemo(
          () => (
            <Img
              src="http://cqilab.khu.ac.kr/wp-content/uploads/2023/01/Hyundong-Shin-1.jpg"
              width="88%"
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
              <Grid item md={12} mt={1}>
                He received the IEEE William R. Bennett Prize Paper Award (2012) and the IEEE
                Guglielmo Marconi Prize Paper Award (2008). He served as a Publicity co-chair for
                the IEEE PIMRC (2018) and a Technical Program co-chair for the IEEE WCNC (PHY Track
                2009), the IEEE Globecom (Communication Theory Symposium 2012, Cognitive Radio and
                Networks Symposium 2016)
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item md={12} justifyContent="right">
                {/* <MDButton variant="gradient" color="info" size="small" style={{ justifyContent: 'flex-end'}}>
                  Read&nbsp;more
                </MDButton> */}
              </Grid>
            </Grid>
          </MDTypography>
          <Divider />
          {/* <MDBox display="flex" alignItems="center">
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
              </Grid>
            </Grid>
          </MDBox> */}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DashboardInfo1
DashboardInfo2.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the DashboardInfo1
DashboardInfo2.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
};

export default DashboardInfo2;
