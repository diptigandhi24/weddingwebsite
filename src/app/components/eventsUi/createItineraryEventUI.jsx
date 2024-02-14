import Image from "next/image";
import flower from "../../image/svg/TimelineFlower.svg";
import location from "../../image/svg/Location_Icon.svg";
import { memo } from "react";
/**
 *
 * hightStyle:{
 * svgWidth,
 * svgHeight
 * infoBgColor
 * timeWeight
 * nameWeight
 * }
 */
function CreateHightLightEvent({ time, eventName, eventDescription, venue }) {
  return (
    <div className="grid grid-flow-col  grid-cols-[10%_auto] p-2 bg-[#FFEEFB]">
      <div>
        <Image src={flower} alt="My SVG" width={30} height={30}></Image>
      </div>
      <div>
        <div>
          <p className="font-abhy font-bold text-sm text-[#EF475F]">{time}</p>
        </div>
        <div></div>
        <div>
          <p className="my-2 text-lg font-abhy font-semibold  text-[#7D1566]">
            {eventName}
          </p>
          <p className="my-2 text-base font-avenir text-[#7D1566]">
            {eventDescription}
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Image src={location} alt="My SVG" width={15} height={15}></Image>

          <p className="font-avenir text-[#B5648B] text-sm">{venue}</p>
        </div>
      </div>
    </div>
  );
}
function CreateRegularEvent({ time, eventName, eventDescription, venue }) {
  return (
    <div className="grid grid-flow-col  grid-cols-[10%_auto] p-2">
      <div>
        <Image src={flower} alt="My SVG" width={15} height={15}></Image>
      </div>
      <div>
        <div>
          <p className="font-abhy font-semibold text-sm text-[#EF475F]">
            {time}
          </p>
        </div>
        <div></div>
        <div>
          <p className="my-2 text-lg font-abhy  text-[#7D1566]">{eventName}</p>
          <p className="my-2 text-base font-avenir text-[#7D1566]">
            {eventDescription}
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Image src={location} alt="My SVG" width={15} height={15}></Image>

          <p className="font-avenir text-[#B5648B] text-sm">{venue}</p>
        </div>
      </div>
    </div>
  );
}
const CreateItineraryEvent = memo(function CreateItineraryEvent({
  id,
  time,
  eventName,
  eventDescription,
  venue,
  eventType,
}) {
  return (
    <section
      id={id}
      className=" border-b-2 border-dotted border-[#EAE3E8] py-2 relative "
    >
      <CreateRegularEvent
        time={time}
        eventName={eventName}
        eventDescription={eventDescription}
        venue={venue}
      />
    </section>
  );
});

export default CreateItineraryEvent;
