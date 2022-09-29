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

// @mui material components
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import MDMenu from "components/MDMenu";
import { useState, useRef } from "react";
import { Icon } from "@mui/material";

export default function data() {
  const [openMore, setOpenMore] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const moreMenu1 = useRef();
  const moreMenu2 = useRef();
  const moreMenu3 = useRef();
  const moreMenu4 = useRef();
  const moreMenu5 = useRef();
  const moreMenu6 = useRef();
  const handleOpenMore = (event) => {
    setAnchorEl(event.target);
    setOpenMore(!openMore);
  };
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "پروژه ها", accessor: "project", width: "30%", align: "left" },
      { Header: "بودجه", accessor: "budget", align: "left" },
      { Header: "وضعیت", accessor: "status", align: "center" },
      { Header: "تکامل", accessor: "completion", align: "center" },
      { Header: "عملیات", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="Asana" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            در حال انجام
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography
            id="1"
            component="a"
            color="text"
            position="relative"
            onClick={handleOpenMore}
          >
            <Icon ref={moreMenu1} height="100%">
              more_vert
            </Icon>

            <MDMenu open={openMore} anchorEl={anchorEl} parentNode={moreMenu1} />
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoGithub} name="Github" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $5,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            انجام شده
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography
            id="2"
            component="a"
            color="text"
            position="relative"
            onClick={handleOpenMore}
          >
            <Icon ref={moreMenu2} height="100%">
              more_vert
            </Icon>

            <MDMenu open={openMore} anchorEl={anchorEl} parentNode={moreMenu2} />
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoAtlassian} name="Atlassian" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,400
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            کنسل شده
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <MDTypography
            id="3"
            component="a"
            color="text"
            position="relative"
            onClick={handleOpenMore}
          >
            <Icon ref={moreMenu3} height="100%">
              more_vert
            </Icon>

            <MDMenu open={openMore} anchorEl={anchorEl} parentNode={moreMenu3} />
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoSpotify} name="Spotify" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            در حال انجام
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography
            id="4"
            component="a"
            color="text"
            position="relative"
            onClick={handleOpenMore}
          >
            <Icon ref={moreMenu4} height="100%">
              more_vert
            </Icon>

            <MDMenu open={openMore} anchorEl={anchorEl} parentNode={moreMenu4} />
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoSlack} name="Slack" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            کنسل شده
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <MDTypography
            id="5"
            component="a"
            color="text"
            position="relative"
            onClick={handleOpenMore}
          >
            <Icon ref={moreMenu5} height="100%">
              more_vert
            </Icon>

            <MDMenu open={openMore} anchorEl={anchorEl} parentNode={moreMenu5} />
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoInvesion} name="Invesion" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,300
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            انجام شده
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography
            id="6"
            component="a"
            color="text"
            position="relative"
            onClick={handleOpenMore}
          >
            <Icon ref={moreMenu6}>more_vert</Icon>
            <MDMenu open={openMore} anchorEl={anchorEl} parentNode={moreMenu6} />
          </MDTypography>
        ),
      },
    ],
  };
}
