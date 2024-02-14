import { useState, useEffect, useCallback } from "react";

function convertToSecs(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  let timeinSecs = hours * 3600 + minutes * 60;
  return timeinSecs;
}

export function updateEventTypeState(eventList, currentDateObj) {
  let currentTime = `${currentDateObj.getHours()}:${currentDateObj.getMinutes()}`;
  let eventIndex = 0;
  let eventTrackIndex = null;
  console.log("Initialiser function is called ");
  function addEventType(time, eventList, index) {
    let currentTimeinSecs = convertToSecs(time);
    let indexStartTimeinSecs = convertToSecs(eventList[index].hrs_start_time);
    let indexEndTimeinSecs = convertToSecs(eventList[index].hrs_end_time);
    switch (true) {
      case currentTimeinSecs >= indexStartTimeinSecs &&
        currentTimeinSecs < indexEndTimeinSecs:
        eventList[index]["eventType"] = "current";
        eventTrackIndex = index;
        break;
      case currentTimeinSecs > indexStartTimeinSecs &&
        currentTimeinSecs > indexEndTimeinSecs:
        eventList[index]["eventType"] = "finished";
        index = index + 1;
        if (index < eventList.length) {
          return addEventType(time, eventList, index);
        }
        break;
      case currentTimeinSecs < indexStartTimeinSecs &&
        currentTimeinSecs < indexEndTimeinSecs:
        eventList[index]["eventType"] = "next";
        eventTrackIndex = index;
        break;
    }
  }

  addEventType(currentTime, eventList, eventIndex);
  let eventStateList = { eventList, eventTrackIndex };
  return eventStateList;
}

//This hooks takes the dayEvent and create a style of event as a state event

export function useEventHook(list) {
  const dateObj = new Date();
  const currentDate = dateObj.getDate();
  let [eventStateList, updateEventStateList] = useState(() => {
    return updateEventTypeState(list, dateObj);
  });

  // useEffect(() => {
  //   let updatedState = [...eventStateList.eventList];
  //   let temp = 0;
  //   temp = eventStateList.eventTrackIndex;
  //   let trackIndex = temp;
  //   let [displayTimeLine, eventTrackId, delay] = calculateDisplayTimeLine(
  //     updatedState,
  //     trackIndex
  //   );
  //   let setTimeOutId = null;
  //   console.log(
  //     "displayTimeLine",
  //     displayTimeLine,
  //     "eventTrackId",
  //     eventTrackId,
  //     "delay",
  //     delay * 1000
  //   );
  //   function calculateDisplayTimeLine(updatedState, trackIndex) {
  //     let currentTime = convertToSecs(
  //       `${dateObj.getHours()}:${dateObj.getMinutes()}`
  //     );
  //     let start_time = convertToSecs(updatedState[trackIndex].hrs_start_time);
  //     let end_time = convertToSecs(updatedState[trackIndex].hrs_end_time);
  //     let delay = null;
  //     console.log(
  //       currentTime,
  //       start_time,
  //       end_time,
  //       "currentTime < start_time",
  //       currentTime < start_time,
  //       "currentTime >= start_time && currentTime <= end_time",
  //       currentTime >= start_time,
  //       currentTime < end_time,
  //       "currentTime > end_time",
  //       currentTime > end_time
  //     );
  //     switch (true) {
  //       case currentTime < start_time:
  //         delay = start_time - currentTime;
  //         updatedState[trackIndex]["eventType"] = "next";
  //         break;
  //       case currentTime >= start_time && currentTime <= end_time:
  //         delay = end_time - currentTime === 0 ? 60000 : end_time - currentTime;
  //         updatedState[trackIndex]["eventType"] =
  //           updatedState[trackIndex]["eventType"] === "current"
  //             ? "finished"
  //             : updatedState[trackIndex]["eventType"] === undefined
  //             ? "current"
  //             : "finished";
  //         break;
  //       case currentTime > end_time:
  //         updatedState[trackIndex]["eventType"] = "finished";
  //         trackIndex =
  //           trackIndex + 1 <= updatedState.length - 1 ? trackIndex + 1 : null;
  //         if (trackIndex === null) {
  //           delay = null;
  //         } else {
  //           return calculateDisplayTimeLine(updatedState, trackIndex);
  //         }
  //     }
  //     console.log("UseEffect function is called with delay", delay);
  //     return [updatedState, trackIndex, delay];
  //   }
  //   // if (delay !== null) {
  //   //   delay = delay * 1000;

  //   //   setTimeOutId = setTimeout(() => {
  //   //     console.log(" timer is over", updatedState, trackIndex);
  //   //     updateEventStateList(() => {
  //   //       console.log("update state function is called", updatedState);
  //   //       return {
  //   //         ...{ eventList: [...updatedState], eventTrackIndex: trackIndex },
  //   //       };
  //   //     });
  //   //   }, delay);
  //   // }
  //   // return () => (setTimeOutId !== null ? clearTimeout(setTimeOutId) : null);
  // }, [eventStateList.eventList]);
  return eventStateList.eventList;
}
