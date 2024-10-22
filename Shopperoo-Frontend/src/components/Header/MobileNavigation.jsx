import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import Constants from "../../../constants";

export default function MobileNavigation() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ minWidth: "300px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "New Arrivals",
          "Men",
          "Women",
          "Kids",
          "Footwear",
          "Fragrance",
          "Accessories",
          "Furniture",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{ fontWeight: 700, fontSize: "2rem" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuTwoToneIcon
              sx={{
                fontSize: window.innerWidth < 600 ? "2rem" : "3rem",
                color: Constants.EMARALD_PRIMARY,
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(254, 252, 232, .92)",
                // paddingLeft: "30px",
                // paddingTop: "30px",
                // // opacity: 0.5,
              },
            }}
          >
            <div className="w-full pl-[1.5rem] pt-[1.5rem]">{list(anchor)}</div>
            <Button
              onClick={toggleDrawer("right", false)}
              sx={{
                position: "absolute",
                fontSize: window.innerWidth < 800 ? "1rem" : "1.5rem",
                bottom: 0,
                width: "100%",
                background: Constants.EMARALD_PRIMARY,
                color: Constants.WHITE_PRIMARY,
                borderRadius: "0px",
              }}
            >
              Close
            </Button>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
