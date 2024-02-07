import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { getCurrentOrNextEvent } from "./scheduleEvent";
import { useEventHook } from "./useEvent";

function CreateSingleEvent({
  id,
  time,
  eventName,
  eventDescription,
  border,
  backgroundColor,
}) {
  return (
    <TimelineItem
      key={id}
      sx={{ border: `${border}`, backgroundColor: `${backgroundColor}` }}
    >
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          variant="filled"
          sx={{ borderColor: "transparent", backgroundColor: "#DA6B8B" }}
        >
          <FilterVintageIcon style={{ color: "#F6D404" }} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {eventName}
        </Typography>
        <Typography>{eventDescription}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function EventTimeline({ eventList, eventDate }) {
  const dateObj = new Date();
  const currentDate = dateObj.getDate();
  let dayList = useEventHook(eventList);
  // if (currentDate === eventDate) {
  //   getCurrentOrNextEvent(eventList, dateObj);
  // } else {
  //   console.log("It's not the event time");
  // }
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {dayList.map((eventObj) => (
        <CreateSingleEvent
          id={eventObj.id}
          time={eventObj.start_time}
          eventName={eventObj.event_name}
          eventDescription={eventObj.event_description}
          border={eventObj.border}
          backgroundColor={eventObj.backgroundColor}
        />
      ))}
    </Timeline>
  );
}
