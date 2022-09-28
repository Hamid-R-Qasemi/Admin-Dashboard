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

import { useEffect, useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the MDModal
import MDModalRoot from "components/MDModal/MDModalRoot";
import MDModalCloseIcon from "components/MDModal/MDModalCloseIcon";
import MDTypography from "components/MDTypography";
import { Grid } from "@mui/material";
import MDButton from "components/MDButton";

function MDModal({ color, dismissible, children, title, state, setState, ...rest }) {
  const [modalStatus, setModalStatus] = useState(state);
  useEffect(() => {
    setModalStatus(state);
    console.log(state);
  }, [state]);

  const handleModalStatus = () => {
    setModalStatus("fadeOut");
    setState(modalStatus);
  };

  // The base template for the modal
  const modalTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <MDModalRoot ownerState={{ color }} {...rest}>
        <MDBox display="flex" alignItems="center">
          <Grid
            container
            direction="column"
            spacing={3}
            justifyContent="space-between"
            height={170}
          >
            <Grid item container display="flex" alignItems="center" direction="column">
              <MDTypography variant="h5">{title}</MDTypography>
              <MDTypography variant="span" mt={1} fontSize={15} fontWeight="light">
                {children}
              </MDTypography>
            </Grid>
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <MDButton color="info">بله</MDButton>
              </Grid>
              <Grid item>
                <MDButton color="secondary" onClick={mount ? handleModalStatus : null}>
                  خیر
                </MDButton>
              </Grid>
            </Grid>{" "}
          </Grid>
        </MDBox>
        <MDModalCloseIcon onClick={mount ? handleModalStatus : null}>&times;</MDModalCloseIcon>
      </MDModalRoot>
    </Fade>
  );

  switch (true) {
    case modalStatus === "mount":
      return modalTemplate();
    case modalStatus === "fadeOut":
      setTimeout(() => setModalStatus("unmount"), 400);
      return modalTemplate(false);
    default:
      modalTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of MDModal
MDModal.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the MDModal
MDModal.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MDModal;
