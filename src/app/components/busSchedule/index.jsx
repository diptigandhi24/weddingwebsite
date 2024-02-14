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
import { AccordionExpandIcon18, AccordionExpandIcon17 } from "./accordian";

const Label = ["17 Feb", "18 Feb"];
const EventsList = [Day17List, Day17List, Day17List];

export default function BusSchedule() {
  const [activeTabId, setIndex] = useState(0);
  const handleChange = (event, index) => {
    setIndex(index);
  };
  return (
    <CustomTabs>
      <TabsButtonTemplate
        TemplateName={"Bus Schedule"}
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
        <div className="p-4">
          <div className="flex justify-start">
            <p className="font-abhy text-base text-[#7D1566] font-semibold">
              Choose accommodation for bus schedule
            </p>
          </div>

          <CustomTabPanel key={1} value={activeTabId} index={0}>
            <AccordionExpandIcon17 />
          </CustomTabPanel>
          <CustomTabPanel key={2} value={activeTabId} index={1}>
            <AccordionExpandIcon18 />
          </CustomTabPanel>
        </div>
      </CustomTabPanelTemplate>
    </CustomTabs>
  );
}
