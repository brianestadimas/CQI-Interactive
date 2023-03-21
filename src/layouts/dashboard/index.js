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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DashboardInfo1 from "examples/Charts/Infographics/DashboardInfo1";
import DashboardInfo2 from "examples/Charts/Infographics/DashboardInfo2";
import DashboardProjects from "examples/Charts/Infographics/DashboardProjects";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// Dashboard components
import ProjectsIBM from "layouts/dashboard/components/ProjectsIBM";

// Dashboard components
import ProjectsQisk from "layouts/dashboard/components/ProjectsQisk";
import Icon from "@mui/material/Icon";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="biotech"
                title="Quantum Fact"
                count="True Random"
                percentage={{
                  color: "success",
                  amount: "Random",
                  label: "that only occurs on Quantum State",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="pets"
                title="Quantum Fact"
                count="Schrodinger's Cat"
                percentage={{
                  color: "success",
                  label: "Paradox in quantum mechanics, can you solve?",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="attractions"
                title="Quantum Fact"
                count="IBM Quantum CPU"
                percentage={{
                  color: "success",
                  amount: "IBM Intel",
                  label: "Next Generations Computer",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Quantum Fact"
                count="Multiverse"
                percentage={{
                  color: "success",
                  amount: "Theory for",
                  label: "Quantum Superposition on Universe",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DashboardInfo1
                  color="info"
                  title="What We Do"
                  description="Our research group focuses on developing solutions to a broad spectrum of fundamental problems involving the design, analysis, and advance of wireless communication, machine intelligence, and quantum information science."
                  date="Campaign 2 days ago"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DashboardInfo2
                  color="info"
                  title="Research - Patent"
                  description="Our research group focuses on developing solutions to a broad spectrum of fundamental problems involving the design, analysis, and advance of wireless communication, machine intelligence, and quantum information science."
                  date="Campaign 2 days ago"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Professor Hyundong Shin"
                  description="He received the IEEE William R. Bennett Prize Paper Award (2012) and the IEEE Guglielmo Marconi Prize Paper Award (2008). He served as a Publicity co-chair for the IEEE PIMRC (2018) and a Technical Program co-chair for the IEEE WCNC (PHY Track 2009), the IEEE Globecom (Communication Theory Symposium 2012, Cognitive Radio and Networks Symposium 2016)"
                  date="Prof. Hyundong Shin has been elevated to IEEE Fellow"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Projects />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid> */}
          </Grid>
        </MDBox>
      </MDBox>
      <MDBox mb={3}>
        <DashboardProjects
          color="info"
          title="Research & Projects"
          description="Our research group focuses on developing solutions to a broad spectrum of fundamental problems involving the design, analysis, and advance of wireless communication, machine intelligence, and quantum information science."
          date="Campaign 2 days ago"
        />
      </MDBox>
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <ProjectsQisk />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid> */}
        </Grid>
      </MDBox>
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <ProjectsIBM />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
