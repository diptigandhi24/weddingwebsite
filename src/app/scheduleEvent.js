import { useState, useEffect } from "react";

/**
 * state Time, end Time, current time
 *
 * Event_EndTime > Current Time >= State Time
 *
 * eventObj{start_Time:{}}
 * so EventTimeline will point to the upcoming event or the current Event that is going on
 */

export function getCurrentOrNextEvent(eventList, currentDateObj) {
  let currentTime = `${currentDateObj.getHours()}:${currentDateObj.getMinutes()}`;
  let eventIndex = 0;

  function findCurrentEvent(time, eventObj, index) {
    switch (true) {
      case time >= eventObj[index].hrs_start_time &&
        time <= eventObj[index].hrs_end_time:
        let activeEvent1 = { eventType: "current", id: index };
        return activeEvent1;
        break;
      case time > eventObj[index].hrs_start_time &&
        time > eventObj[index].hrs_end_time:
        index = index + 1;
        if (index < eventObj.length) {
          return findCurrentEvent(time, eventObj, index);
        } else {
          let activeEvent2 = {
            eventType: "no event",
            id: null,
          };
          return activeEvent2;
        }

        break;
      case time < eventObj[index].start_time && time < eventObj[index].end_time:
        let activeEvent3 = { eventType: "next", id: index };
        return activeEvent3;
    }
  }

  return findCurrentEvent("12:30", eventList, eventIndex);
}
