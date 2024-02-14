"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import React from "react";
import EventTimeline from "./eventTimeline";
import { Day1List, Day2List } from "./weddingEventList";

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className="text-black"
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default function EventTabs() {
  const [index, setIndex] = useState(0);

  const handleChange = (event, index) => {
    setIndex(index);
  };

  return (
    <div className="w-full  mb-10 ">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            position: "-webkit-sticky",
            position: "sticky",
            top: 0,
            backgroundColor: "whitesmoke",
          }}
          className="z-50"
        >
          <Tabs
            value={index}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab
              label="Saturday"
              id={`simple-tab-${0}`}
              aria-controls={`simple-tabpanel-${0}`}
            />
            <Tab
              label="Sunday"
              id={`simple-tab-${1}`}
              aria-controls={`simple-tabpanel-${1}`}
            />
            <Tab
              label="Wedding"
              id={`simple-tab-${2}`}
              aria-controls={`simple-tabpanel-${2}`}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={index} index={0}>
          <EventTimeline eventList={Day1List} eventDate={7} />
        </CustomTabPanel>
        <CustomTabPanel value={index} index={1}>
          <EventTimeline eventList={Day2List} eventDate={8} />
        </CustomTabPanel>
        <CustomTabPanel value={index} index={2}>
          <EventTimeline eventList={Day2List} eventDate={9} />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
