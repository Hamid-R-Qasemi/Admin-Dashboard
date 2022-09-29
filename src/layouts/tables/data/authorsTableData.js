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
import { Grid, Icon } from "@mui/material";
import MDButton from "components/MDButton";

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
      { Header: "نویسنده", accessor: "author", width: "45%", align: "left" },
      { Header: "وظیفه", accessor: "function", align: "left" },
      { Header: "وضعیت", accessor: "status", align: "center" },
      { Header: "تاریخ استخدام", accessor: "employed", align: "center" },
      { Header: "عملیات", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="جان مایکل" email="john@creative-tim.com" />,
        function: <Job title="مدیر" description="مجموعه" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="آنلاین" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <Grid container>
            <Grid item>
              <MDButton>
                <Icon color="error">delete</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon>edit</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon color="info">visibility</Icon>
              </MDButton>
            </Grid>
          </Grid>
        ),
      },
      {
        author: <Author image={team3} name="الکسا لیراس" email="alexa@creative-tim.com" />,
        function: <Job title="برنامه نویس" description="توسعه دهنده" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="آفلاین" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <Grid container>
            <Grid item>
              <MDButton>
                <Icon color="error">delete</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon>edit</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon color="info">visibility</Icon>
              </MDButton>
            </Grid>
          </Grid>
        ),
      },
      {
        author: <Author image={team4} name="لارنت پریر" email="laurent@creative-tim.com" />,
        function: <Job title="اجرا کننده" description="پروژه ها" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="آنلاین" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <Grid container>
            <Grid item>
              <MDButton>
                <Icon color="error">delete</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon>edit</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon color="info">visibility</Icon>
              </MDButton>
            </Grid>
          </Grid>
        ),
      },
      {
        author: <Author image={team3} name="مایکل لوی" email="michael@creative-tim.com" />,
        function: <Job title="برنامه نویس" description="توسعه دهنده" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="آنلاین" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <Grid container>
            <Grid item>
              <MDButton>
                <Icon color="error">delete</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon>edit</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon color="info">visibility</Icon>
              </MDButton>
            </Grid>
          </Grid>
        ),
      },
      {
        author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="مدیر" description="اجرایی" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="آفلاین" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <Grid container>
            <Grid item>
              <MDButton>
                <Icon color="error">delete</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon>edit</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon color="info">visibility</Icon>
              </MDButton>
            </Grid>
          </Grid>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="برنامه نویس" description="توسعه دهنده" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="آفلاین" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <Grid container>
            <Grid item>
              <MDButton>
                <Icon color="error">delete</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon>edit</Icon>
              </MDButton>
            </Grid>
            <Grid item>
              <MDButton>
                <Icon color="info">visibility</Icon>
              </MDButton>
            </Grid>
          </Grid>
        ),
      },
    ],
  };
}
