import CreateItineraryEvent from "../eventsUi/createItineraryEventUI";
import { useState, useEffect, useCallback } from "react";
import { useEventHook } from "./useEvent";

const demodata = [
  {
    id: "d1E3",
    hrs_start_time: "12:00",
    start_time: "12:00pm to 1:30pm",
    end_time: "01:30 pm",
    hrs_end_time: "13:00",
    event_name: "Lunch is served!",
    event_description: "none",
    border: "1px transparent",
    backgroundColor: "transparent",
    Venue: "Baynest's kitchen area",
  },
  {
    id: "d1E4",
    hrs_start_time: "13:01",
    start_time: "2:00 pm",
    end_time: "6:00 pm",
    hrs_end_time: "13:04",
    event_name: "Mehendi, Music and Games",
    event_description:
      "The ceremony brings together the cooling properties of Henna and the mindful intricate patterns of Mandalas and natural motifs. The ceremony is a way to calming the wedding nerves. Ours aims to also bring everyone together through music and games!",
    border: "1px transparent",
    backgroundColor: "transparent",
    Venue: "Baynest",
  },
  {
    id: "d1E5",
    hrs_start_time: "13:04",
    start_time: "4:00 pm",
    end_time: "5:00 pm",
    hrs_end_time: "13:06",
    event_name: "Old School Goli Soda and Local Snacks!",
    event_description: "none",
    border: "1px transparent",
    backgroundColor: "transparent",
    Venue: "Baynest's kitchen area",
  },
];
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
