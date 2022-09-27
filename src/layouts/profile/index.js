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
import { useEffect } from "react";

// @mui material components

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useMaterialUIController, setDirection } from "context";

function Overview() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "ltr");
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="اطلاعات پروفایل"
                description="سلام، من الک تامپسون هستم، تصمیمات: اگر نمی توانید تصمیم بگیرید، پاسخ منفی است. اگر دو مسیر به یک اندازه دشوار هستند، یکی را در کوتاه مدت دردناک تر انتخاب کنید (پرهیز از درد، ایجاد توهم برابری است)."
                info={{
                  fullName: "الک م. تامپسون",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  location: "USA",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "ویرایش پروفایل" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="گفتگو" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="پروژه #2"
                title="مدرن"
                description="همانطور که اوبر از طریق حجم عظیمی از آشفتگی های مدیریت داخلی کار می کند."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "مشاهده پروژه",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="پروژه #1"
                title="اسکاندیناویایی"
                description="موسیقی چیزی است که هر کسی نظر خاص خود را در مورد آن دارد."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "مشاهده پروژه",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="پروژه #3"
                title="مینیمالیست"
                description="افراد مختلف دارای سلیقه های مختلف و انواع مختلفی از موسیقی هستند."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "مشاهده پروژه",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="پروژه #4"
                title="گوتیک"
                description="چرا کسی آبی را به صورتی ترجیح می دهد؟ واضح است که صورتی رنگ بهتری است."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "مشاهده پروژه",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
