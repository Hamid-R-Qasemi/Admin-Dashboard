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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React exصبحple components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          نمای کلی سفارشات
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            این ماه
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, تغییرات دیزاین"
          dateTime="22 اسفند 7:20 بعد از ظهر"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="سفارش جدید #1832412"
          dateTime="21 اسفند 11 بعد از ظهر"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="پرداخت های سرور برای ماه اردیبهشت"
          dateTime="21 اسفند 9:34 بعد از ظهر"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="کارت اضافه شده برای سفارش #4395133"
          dateTime="20 اسفند 2:20 صبح"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="کارت اضافه شده برای سفارش #4395133"
          dateTime="18 اسفند 4:54 صبح"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
