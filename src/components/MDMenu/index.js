import { Icon, Menu, MenuItem } from "@mui/material";
import MDTypography from "components/MDTypography";
// import { useEffect, useState } from "react";
// import NotificationItem from "examples/Items/NotificationItem";

function index({ anchorEl, parentNode }) {
  //   const [openMore, setOpenMore] = useState(false);
  console.log(anchorEl, parentNode.current);
  //   useEffect(() => {
  //     setOpenMore(open);
  //   }, [open]);
  // const handleCloseMore = () => setOpenMore(false);

  return (
    <Menu
      id="more-menu"
      anchorEl={anchorEl}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={anchorEl === parentNode.current}
      // onClose={handleCloseMore}
      sx={{ mt: 2 }}
    >
      <MenuItem key="1" color="error">
        <MDTypography
          variant="button"
          color="error"
          fontWeight="medium"
          display="flex"
          alignItems="center"
        >
          <Icon>delete</Icon>
          &nbsp;حذف
        </MDTypography>
      </MenuItem>

      <MenuItem key="2">
        <MDTypography
          variant="button"
          color="text"
          fontWeight="medium"
          display="flex"
          alignItems="center"
        >
          <Icon>edit</Icon>
          &nbsp;ویرایش
        </MDTypography>
      </MenuItem>
      <MenuItem key="3" color="info">
        <MDTypography
          variant="button"
          color="info"
          fontWeight="medium"
          display="flex"
          alignItems="center"
        >
          <Icon>visibility</Icon>
          &nbsp;مشاهده
        </MDTypography>
      </MenuItem>
    </Menu>
  );
}

export default index;
