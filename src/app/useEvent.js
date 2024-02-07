import { useState, useEffect } from "react";
import { getCurrentOrNextEvent } from "./scheduleEvent";

function highLightEvent(eventType, id, list) {
  const highlightNext = "1px solid green";
  const highlightCurrent = "green";
  const firstList = list;
  switch (true) {
    case eventType === "next":
      firstList[id].border = highlightNext;
      return firstList;
      break;
    case eventType === "current":
      firstList[id].backgroundColor = highlightCurrent;
      return firstList;
      break;
    default:
      return firstList;
      break;
  }
}

export function useEventHook(list) {
  const dateObj = new Date();
  const currentDate = dateObj.getDate();
  let { eventType, id } = { ...getCurrentOrNextEvent(list, dateObj) };

  let updatedList;
  if (id !== null) {
    updatedList = highLightEvent(eventType, id, list);
  } else {
    updatedList = list;
  }
  let [eventList, updateEventList] = useState(updatedList);
  useEffect(() => {
    if (id !== null) {
      console.log("Start the timer to highlight the next event");
    }
  });
  function testHook() {
    console.log("Nothing Happened");
  }

  return eventList;
}
