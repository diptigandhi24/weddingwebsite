"use client";

import {
  CustomTabs,
  CustomTabPanel,
  CustomTabPanelTemplate,
  TabsButtonTemplate,
} from "../tabs";
import { Day17List } from "@/app/weddingEventList";
import { useState } from "react";
import Tab from "@mui/material/Tab";

const Label = ["Phone Numbers", "Venue Details"];
const EventsList = [Day17List, Day17List];

export default function Resources() {
  const [activeTabId, setIndex] = useState(0);
  const handleChange = (event, index) => {
    console.log("Active tab index", index);
    setIndex(index);
  };
  return (
    <CustomTabs>
      <TabsButtonTemplate
        TemplateName={"Resources"}
        stateValue={activeTabId}
        handleChange={handleChange}
      >
        {Label.map((label, indexID) => (
          <Tab
            key={indexID}
            label={label}
            id={`simple-tab-${indexID}`}
            aria-controls={`simple-tabpanel-${indexID}`}
            sx={{
              backgroundColor: "white",
              opacity: "0.6",
              margin: "5px",
              textTransform: "none",
              fontFamily: "abhy",
              fontWeight: "800",
              lineHeight: `1.75rem !important`,
              fontSize: "16px",
            }}
            className="font-abhy rounded-xl"
          />
        ))}
      </TabsButtonTemplate>

      <CustomTabPanelTemplate>
        {EventsList.map((dayObj, index) => (
          <CustomTabPanel key={index} value={activeTabId} index={index}>
            <h1>Resources will be added soon</h1>
          </CustomTabPanel>
        ))}
      </CustomTabPanelTemplate>
    </CustomTabs>
  );
}
