"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { display, flexbox } from "@mui/system";

export function CustomTabPanel({ children, value, index }) {
  console.log("Value of state and index", value, index);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className="text-black rounded-2xl"
    >
      {value === index && (
        <Box sx={{ p: 2 }} className="text-black ">
          {children}
        </Box>
      )}
    </div>
  );
}
export function CustomTabPanelTemplate({ children }) {
  return (
    <Box sx={{ background: "white" }} className="text-black rounded-xl">
      {children}
    </Box>
  );
}
export function TabsButton({ label, index }) {
  return (
    <>
      <Tab
        label={label}
        id={`simple-tab-${index}`}
        aria-controls={`simple-tabpanel-${index}`}
        sx={{
          backgroundColor: "white",
          opacity: "0.6",
          margin: "5px",
          textTransform: "none",
          fontFamily: "abhy",
        }}
        className="font-abhy text-base font-extrabold rounded-2xl"
      />
    </>
  );
}
export function TabsButtonTemplate({
  children,
  TemplateName,
  stateValue,
  handleChange,
}) {
  return (
    <>
      <Box
        sx={{
          position: "-webkit-sticky",
          position: "sticky",
          top: 0,
          backgroundColor: "#84CFE7",
        }}
        className="z-50"
      >
        <section className="text-white flex justify-center sticky top-0 mb-5">
          <h1 className="font-bold text-3xl font-abhy">{TemplateName}</h1>
        </section>
        <Tabs
          value={stateValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          selectionFollowsFocus={true}
          TabIndicatorProps={{
            style: { backgroundColor: "transparent" },
          }}
        >
          {children}
        </Tabs>
      </Box>
    </>
  );
}
export function CustomTabs({ children }) {
  return (
    <div className="bg-[#84CFE7] pt-20 flex justify-center flex-col">
      <section className="flex justify-center">
        <div className="lg:w-[80%] sm:w-[90%]">
          <Box sx={{ width: "100%" }}>{children}</Box>
        </div>
      </section>
    </div>
  );
}
