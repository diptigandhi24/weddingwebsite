import { Icon } from "@mui/material";
import Image from "next/image";
import ArrowDown from "../../image/svg/arrow-down.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  beachHouse17,
  uva17,
  bayNest17,
  beachHouse18,
  uva18,
  bayNest18,
} from "@/app/weddingEventList";
const RightArrow = () => (
  <Icon>
    <Image src={ArrowDown} height={25} width={25} />
  </Icon>
);
function AccordianHeading({ heading }) {
  return (
    <p className="font-avenir text-sm text-[#2E4057]">
      Click here for your bus schedules
    </p>
  );
}

function AccordionBusTemplate({ time, placeList }) {
  return (
    <>
      <div className="border-dotted border-b-2 border-[#2E4057] border-opacity-45 py-4 ">
        {placeList.map((event, index) => {
          return (
            <>
              <div className="grid grid-cols-2 gap-y-2 mb-2">
                <div className="font-abhy font-semibold text-[#7D1566] text-sm">
                  {time}
                </div>
                <div className="flex justify-end">
                  <div className="font-abhy font-semibold text-[#7D1566] text-sm">
                    {event.vehicle}
                  </div>
                </div>
              </div>
              <div key={index} className="mt-[10px]">
                {/* from */}
                <div className="grid grid-cols-[10px_auto] gap-2  ">
                  <div className="flex align-middle justify-start items-center w-2">
                    <span className="w-2 h-2 border-solid border-2 rounded-full border-[#2E4057]  "></span>
                  </div>
                  <div className="flex align-middle items-start leading-3">
                    <p className="justify-start font-avenir text-sm text-[#2E4057]">
                      {event.from}
                    </p>
                  </div>
                </div>
                {/* seperator */}
                <div className="grid grid-cols-[10px_auto] gap-2 ">
                  <div className="flex w-[4px] ml-[2px] align-top">
                    <div className="w-2 h-6 border-l-2 border-dotted relative border-[#EF475F] opacity-40 ml-[25%] "></div>
                  </div>
                  <div>
                    <span className=" w-4 invisible ">Some text here</span>
                  </div>
                </div>
                {/* to */}
                <div className="grid grid-cols-[10px_auto] gap-2 ">
                  <div className="flex align-middle justify-start items-center w-2">
                    <span className="w-2 h-2 border-solid border-2 rounded-full border-[#EF475F] bg-[#EF475F]  "></span>
                  </div>
                  <div className="flex align-middle items-start leading-3">
                    <p className="justify-start font-avenir text-sm text-[#2E4057]">
                      {event.to}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
function AccordianContent({ timeListwithPlaces }) {
  //extract timing fromt that
  const timeList = Object.keys(timeListwithPlaces);

  return (
    <>
      {timeList.map((time, index) => (
        <AccordionBusTemplate
          key={index}
          time={time}
          placeList={timeListwithPlaces[time]}
        />
      ))}
    </>
  );
}
function AccordianSummaryisVisible({ heading, id }) {
  const [isVisible, update] = useState(true);
  return (
    <AccordionSummary
      expandIcon={<RightArrow />}
      aria-controls="panel1-content"
      id={`panel1-header-${id}`}
      onClick={() => {
        update((prev) => !prev);
      }}
    >
      <div>
        <p className="font-abhy text-base text-[#7D1566] font-semibold my-2">
          {heading}
        </p>
        {isVisible ? <AccordianHeading /> : ""}
      </div>
    </AccordionSummary>
  );
}

export function AccordionExpandIcon17() {
  return (
    <div>
      <Accordion>
        <AccordianSummaryisVisible heading={"BayNest Beach Resort"} id="1" />
        <AccordionDetails>
          <AccordianContent timeListwithPlaces={bayNest17} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordianSummaryisVisible heading={"UVA Meridian"} id="2" />
        <AccordionDetails>
          <AccordianContent timeListwithPlaces={uva17} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordianSummaryisVisible heading={"Beach house"} id="3  " />
        <AccordionDetails>
          <AccordianContent timeListwithPlaces={beachHouse17} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export function AccordionExpandIcon18() {
  return (
    <div>
      <Accordion>
        <AccordianSummaryisVisible heading={"BayNest Beach Resort"} id="1" />
        <AccordionDetails>
          <AccordianContent timeListwithPlaces={bayNest18} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordianSummaryisVisible heading={"UVA Meridian"} id="2" />
        <AccordionDetails>
          <AccordianContent timeListwithPlaces={uva18} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordianSummaryisVisible heading={"Beach house"} id="3  " />
        <AccordionDetails>
          <AccordianContent timeListwithPlaces={beachHouse18} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
