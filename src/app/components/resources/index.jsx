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
import Locationsvg from "../../image/svg/Location_Icon.svg";
import Image from "next/image";
import map from "../../image/Map.png";
const Label = ["Phone Numbers", "Venue Details"];
import phonesvg from "../../image/svg/Call.svg";
function ContactDetails() {
  return (
    <div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">Sneha</p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:919901746824">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
          <p className="font-avenir text-base text-[#2E4057]">
            Travel Related Queries
          </p>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
            Harish Shetty
          </p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:9880080391">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
          <p className="font-avenir text-base text-[#2E4057]">
            BayNest Manager
          </p>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
            Gautham Shetty
          </p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:9845121498">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
          <p className="font-avenir text-base text-[#2E4057]">BayNest Owner</p>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
            Gauri Marballi
          </p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:9821712436">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
          <p className="font-avenir text-base text-[#2E4057]">Jeet’s Mother</p>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
            Ravi Marballi
          </p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:9769985453">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
          <p className="font-avenir text-base text-[#2E4057]">Jeet’s Father</p>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
            Namita Basrur
          </p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:99845158439">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
          <p className="font-avenir text-base text-[#2E4057]">Nitya’s Mother</p>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
            Girish Basrur
          </p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:9902053090">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
          <p className="font-avenir text-base text-[#2E4057]">Nitya’s Father</p>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <div className="grid grid-cols-[auto_10%] justify-between items-center ">
          <p className="text-lg font-abhy  text-[#7D1566] font-bold ">Nirica</p>
          <p className="font-avenir text-base text-[#2E4057] pt-[10px] pr-[10px]">
            <a href="tel:8754464713">
              <Image src={phonesvg} width={30} height={30} />
            </a>
          </p>
        </div>
        <p className="font-avenir text-base text-[#2E4057]">
          Food Related Queries
        </p>
      </div>
    </div>
  );
}
function VenueDetail() {
  return (
    <div>
      <section className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <a target="_blank" href="https://maps.app.goo.gl/YRTNik8oKvzsDteW6">
          <div className="grid grid-cols-[auto_10%] ">
            <div>
              <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
                BayNest Beach Resort
              </p>
              <p className="font-avenir text-base text-[#2E4057]">
                Accommodation, Mehendi & Sangeet
              </p>
            </div>
            <div className="flex justify-end">
              <Image src={Locationsvg} width={30} height={30} />
            </div>
          </div>
        </a>
        <div className="my-2">
          <Image
            src={map}
            style={{ objectFit: "contain" }}
            placeholder="blur"
          />
        </div>
      </section>
      <section className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <a target="_blank" href="https://maps.app.goo.gl/ctCjWUwq7Ehaxxv16">
          <div className="grid grid-cols-[auto_10%] ">
            <div>
              <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
                Kadal Mane (Beach House)
              </p>
              <p className="font-avenir text-base text-[#2E4057]">Wedding</p>
            </div>
            <div className="flex justify-end">
              <Image src={Locationsvg} width={30} height={30} />
            </div>
          </div>
        </a>
      </section>
      <section className="border-b-2 border-dotted border-[#EAE3E8] py-2">
        <a target="_blank" href="https://maps.app.goo.gl/9iRWjFB3nPBmhUkk8">
          <div className="grid grid-cols-[auto_10%] ">
            <div>
              <p className="text-lg font-abhy  text-[#7D1566] font-bold ">
                Uva Meridian
              </p>
              <p className="font-avenir text-base text-[#2E4057]">
                Accommodation
              </p>
            </div>
            <div className="flex justify-end">
              <Image src={Locationsvg} width={30} height={30} />
            </div>
          </div>
        </a>
      </section>
    </div>
  );
}
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
        <CustomTabPanel key={0} value={activeTabId} index={0}>
          <ContactDetails />
        </CustomTabPanel>
        <CustomTabPanel key={1} value={activeTabId} index={1}>
          <VenueDetail />
        </CustomTabPanel>
      </CustomTabPanelTemplate>
    </CustomTabs>
  );
}
