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
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme }) => {
  const { palette, typography, borders, functions } = theme;

  const { black } = palette;
  const { fontSizeRegular, fontWeightMedium } = typography;
  const { borderRadius } = borders;
  const { pxToRem } = functions;
  // backgroundImage value

  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: pxToRem(200),
    minWidth: pxToRem(400),
    backgroundColor: "#fefefe",
    color: black.main,
    position: "fixed",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
    top: "35%",
    left: "35%",
  };
});
