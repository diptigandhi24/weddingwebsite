// *******Working Design of Tabs******

"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className="text-black mt-0"
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}
export default function Itinerary() {
  const [index, setIndex] = useState(0);
  const handleChange = (event, index) => {
    setIndex(index);
  };
  //   const selectedStyle = { opacity: "1", color: "#7D1566" };
  //   const [selectedTab, updateSelectedTab] = useState[0];

  return (
    <div className="bg-[#84CFE7] pt-20 flex justify-center flex-col">
      <section className="flex justify-center">
        <div className="lg:w-[80%] sm:w-[90%]">
          <Box sx={{ width: "100%" }}>
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
                <h1 className="font-bold text-3xl font-abhy">Itinerary</h1>
              </section>
              <Tabs
                value={index}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
                selectionFollowsFocus={true}
                TabIndicatorProps={{
                  style: { backgroundColor: "transparent" },
                }}
              >
                <Tab
                  label="17th Feb"
                  id={`simple-tab-${0}`}
                  aria-controls={`simple-tabpanel-${0}`}
                  sx={{
                    backgroundColor: "white",
                    opacity: "0.6",
                    margin: "5px",
                    "&:hover": { opacity: "1" },
                    "&:focus": { opacity: "1", color: "#7D1566" },
                    textTransform: "none",
                    fontFamily: "abhy",
                    fontWeight: "800",
                  }}
                  className="font-abhy text-base font-extrabold rounded-2xl"
                />
                <Tab
                  label="18th Feb"
                  id={`simple-tab-${0}`}
                  aria-controls={`simple-tabpanel-${1}`}
                  sx={{
                    background: "white",
                    opacity: "0.6",
                    margin: "5px",
                  }}
                  className="font-abhy text-base font-extrabold text-[#84CFE7] rounded-2xl"
                />
                <Tab
                  label="Wedding Rituals"
                  id={`simple-tab-${0}`}
                  aria-controls={`simple-tabpanel-${2}`}
                  sx={{
                    background: "white",
                    opacity: "0.6",
                    margin: "5px",
                    "&:hover": { opacity: "1" },
                    "&:focus": { opacity: "1", color: "#7D1566" },
                    textTransform: "none",
                    fontFamily: "abhy",
                    fontWeight: "500",
                  }}
                  className="font-abhy text-base font-extrabold text-[#84CFE7] rounded-2xl"
                />
              </Tabs>
            </Box>

            <Box sx={{ background: "white" }}>
              <CustomTabPanel value={index} index={0}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean bibendum diam a molestie lacinia. Suspendisse tellus
                  nulla, finibus ut lorem id, malesuada maximus ante. Vestibulum
                  convallis risus quis lacus molestie dictum ut nec neque. Fusce
                  feugiat est tellus, quis pretium risus pretium vel. Praesent
                  facilisis tincidunt ligula, nec gravida turpis dignissim ut.
                  Curabitur tristique hendrerit eros, eget ultricies lectus
                  molestie venenatis. Aliquam molestie sed sapien id porta.
                  Nullam ut scelerisque augue, quis varius libero. Cras
                  facilisis arcu eu tortor blandit, nec mollis augue bibendum.
                  Ut non sollicitudin tellus, eleifend fermentum dui. Aenean
                  aliquam eleifend orci quis pharetra. Nam neque arcu, finibus
                  nec hendrerit id, elementum dignissim risus. Donec dui odio,
                  egestas eget venenatis porta, bibendum quis lacus. Sed sed leo
                  id nulla rutrum suscipit a sit amet lorem. Proin condimentum
                  luctus metus non gravida. Fusce quis neque ante. Pellentesque
                  varius odio nibh, nec ultricies enim commodo id. Vivamus
                  scelerisque, ex et blandit convallis, mauris ex dictum ante,
                  vitae bibendum odio ligula in urna. Vestibulum sit amet
                  rhoncus justo, id fringilla ante. Ut at lobortis erat. Sed non
                  sodales nisi, a imperdiet ante. Curabitur scelerisque lectus
                  ut risus molestie consequat. Maecenas ut sem et purus faucibus
                  vestibulum vel a tortor. Nam vitae orci eget ipsum laoreet
                  venenatis. Proin purus odio, interdum eu varius ac, bibendum
                  ut dui. Proin quis odio a lectus pellentesque consectetur nec
                  non lacus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Nullam ultricies
                  tellus euismod enim auctor lobortis. Sed lacinia massa quis
                  congue pretium. Cras luctus aliquam purus, eu eleifend metus
                  tincidunt non. Ut vitae elit lectus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fusce mattis convallis
                  arcu, id ultrices turpis tincidunt sed. Nunc scelerisque
                  mollis nibh, quis dictum arcu facilisis non. Sed commodo
                  lectus quis mi interdum, in feugiat erat laoreet. Ut
                  ullamcorper tristique eleifend. Vivamus cursus, odio et congue
                  lobortis, dui dui lacinia orci, id facilisis urna dui in
                  dolor. Sed congue dolor quis tincidunt auctor. Pellentesque
                  vitae ex diam. Phasellus egestas dolor eget suscipit maximus.
                  Mauris hendrerit turpis gravida sagittis faucibus. Proin
                  molestie rhoncus ipsum. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Ut
                  lacinia et nunc in fringilla. Vivamus pharetra vel justo at
                  sodales. Duis ac finibus ante. Cras commodo libero in nibh
                  lacinia, in accumsan erat rutrum. Nullam nulla dui, sodales
                  vitae quam et, ultrices ullamcorper metus. Donec tincidunt
                  purus odio. Vivamus consectetur ex vel magna semper, vitae
                  pellentesque odio auctor. Aenean scelerisque bibendum
                  sollicitudin. Proin eget ligula interdum, consectetur nisl
                  nec, laoreet dui. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae; Praesent rutrum
                  maximus malesuada. Donec vulputate, augue eget accumsan
                  laoreet, magna augue pretium justo, eu hendrerit dui mi sit
                  amet enim.
                </p>
              </CustomTabPanel>
              <CustomTabPanel value={index} index={1}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean bibendum diam a molestie lacinia. Suspendisse tellus
                  nulla, finibus ut lorem id, malesuada maximus ante. Vestibulum
                  convallis risus quis lacus molestie dictum ut nec neque. Fusce
                  feugiat est tellus, quis pretium risus pretium vel. Praesent
                  facilisis tincidunt ligula, nec gravida turpis dignissim ut.
                  Curabitur tristique hendrerit eros, eget ultricies lectus
                  molestie venenatis. Aliquam molestie sed sapien id porta.
                  Nullam ut scelerisque augue, quis varius libero. Cras
                  facilisis arcu eu tortor blandit, nec mollis augue bibendum.
                  Ut non sollicitudin tellus, eleifend fermentum dui. Aenean
                  aliquam eleifend orci quis pharetra. Nam neque arcu, finibus
                  nec hendrerit id, elementum dignissim risus. Donec dui odio,
                  egestas eget venenatis porta, bibendum quis lacus. Sed sed leo
                  id nulla rutrum suscipit a sit amet lorem. Proin condimentum
                  luctus metus non gravida. Fusce quis neque ante. Pellentesque
                  varius odio nibh, nec ultricies enim commodo id. Vivamus
                </p>
              </CustomTabPanel>
              <CustomTabPanel value={index} index={2}>
                <p>
                  is lacus molestie dictum ut nec neque. Fusce feugiat est
                  tellus, quis pretium risus pretium vel. Praesent facilisis
                  tincidunt ligula, nec gravida turpis dignissim ut. Curabitur
                  tristique hendrerit eros, eget ultricies lectus molestie
                  venenatis. Aliquam molestie sed sapien id porta. Nullam ut
                  scelerisque augue, quis varius libero. Cras facilisis arcu eu
                  tortor blandit, nec mollis augue bibendum. Ut non sollicitudin
                  tellus, eleifend fermentum dui. Aenean aliquam eleifend orci
                  quis pharetra. Nam neque arcu, finibus nec hendrerit id,
                  elementum dignissim risus. Donec dui odio, egestas eget
                  venenatis porta, bibendum quis lacus. Sed sed leo id nulla
                  rutrum suscipit a sit amet lorem. Proin condimentum luctus
                  metus non gravida. Fusce quis neque ante. Pellentesque varius
                  odio nibh, nec ultricies enim commodo id. Vivamus
                </p>
              </CustomTabPanel>
            </Box>
          </Box>
        </div>
      </section>
    </div>
  );
}
