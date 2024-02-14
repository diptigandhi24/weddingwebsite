import CreateItineraryEvent from "../eventsUi/createItineraryEventUI";
import { useState, useEffect, useCallback } from "react";
import { useEventHook } from "./useEvent";

export default function ItineraryTimeline({ list }) {
  //with the help of Id we will change update the style of that Id
  let stateList = useEventHook(list);
  return (
    <>
      {stateList.map((eventObj, index) => (
        <CreateItineraryEvent
          id={index}
          key={index}
          time={eventObj.start_time}
          eventName={eventObj.event_name}
          eventDescription={eventObj.event_description}
          venue={eventObj.Venue}
          eventType={eventObj.eventType}
        />
      ))}
    </>
  );
}
