/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "position", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "degree", accessor: "employed", align: "center" },
      { Header: "research interest", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: (
          <Author
            image="http://cqilab.khu.ac.kr/wp-content/uploads/2023/01/Hyundong-Shin-1.jpg"
            name="Professor Hyundong Shin"
            email="hshin@khu.ac.kr"
          />
        ),
        function: <Job title="Professor" description="CQILAB Kyung Hee University" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Professor
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          ></MDTypography>
        ),
      },
      {
        author: (
          <Author
            image="http://cqilab.khu.ac.kr/wp-content/uploads/2019/10/PhD_Student_UmanKhalid.jpg.JPEG.jpg"
            name="Uman Khalid"
            email="umankhalid@khu.ac.kr"
          />
        ),
        function: <Job title="Postdoctor" description="CQILAB Kyung Hee University" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Post Doc
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          ></MDTypography>
        ),
      },
      {
        author: (
          <Author
            image="http://cqilab.khu.ac.kr/wp-content/uploads/2023/02/1676971282159.png"
            name="Awais Khan"
            email="khanawais62@khu.ac.kr"
          />
        ),
        function: <Job title="Postdoctor" description="CQILAB Kyung Hee University" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Post Doc
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          ></MDTypography>
        ),
      },
      {
        author: (
          <Author
            image="http://cqilab.khu.ac.kr/wp-content/uploads/2023/01/Picture-2021-11-03.png"
            name="Fakhar Zaman"
            email="fakhar_102@khu.ac.kr"
          />
        ),
        function: <Job title="PhD Fellow" description="CQILAB Kyung Hee University" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            PhD Fellow
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          ></MDTypography>
        ),
      },
      {
        author: (
          <Author
            image="http://cqilab.khu.ac.kr/wp-content/uploads/2019/10/MS_Student_SawNangPaing.JPG.jpg"
            name="Saw Nang Paing"
            email="sawnangpaing@khu.ac.kr"
          />
        ),
        function: <Job title="PhD Student" description="CQILAB Kyung Hee University" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            PhD Student
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          ></MDTypography>
        ),
      },
    ],
  };
}
