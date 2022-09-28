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
import { styled } from "@mui/material/styles";

export default styled("span")(({ theme }) => {
  const { palette, typography, functions } = theme;

  const { black } = palette;
  const { fontWeightMedium } = typography;
  const { pxToRem } = functions;

  return {
    color: black.main,
    fontSize: pxToRem(25),
    padding: `${pxToRem(0)} ${pxToRem(8)}`,
    marginRight: pxToRem(0),
    fontWeight: fontWeightMedium,
    cursor: "pointer",
    lineHeight: 0,
    position: "absolute",
    top: pxToRem(30),
    left: pxToRem(20),
  };
});
