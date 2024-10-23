import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Constants from "../../../constants";

function CustomTabs({ tabData, flexDirection, orientation }) {
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        display: "flex",
        flexDirection: { flexDirection }, // "column + Horizontal" for horizontal tabs & "row + vertical" for vertical tabs
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderRight: 1, borderColor: "divider", minWidth: "150px" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation={orientation || "horizontal"}
            TabIndicatorProps={{
              style: {
                backgroundColor: Constants.YELLOW_PRIMARY,
              },
            }}
          >
            {tabData.map((tab) => (
              <Tab
                sx={{
                  "&.Mui-selected": {
                    color: Constants.YELLOW_PRIMARY,
                  },
                  "&:hover": {
                    color: Constants.YELLOW_PRIMARY,
                  },

                  color: Constants.BLACK_PRIMARY,
                }}
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </TabList>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {tabData.map((tab) => (
            <TabPanel key={tab.value} value={tab.value}>
              {tab.content}
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
}

export default CustomTabs;
