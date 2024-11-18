import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import {
  FaBriefcase,
  FaLaptop,
  FaIceCream,
  FaTruck,
  FaNetworkWired,
  FaSocks,
  FaPizzaSlice,
  FaWineGlassAlt,
} from "react-icons/fa";
import { workItems } from "../data/Data";

const WorkTimeLine = () => {
  return (
    <div className="lg:flex-col lg:text-center -mt-8">
      <p className="text-center text-2xl text-black">Work</p>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {workItems
          .slice(0)
          .reverse()
          .map((item) => (
            <TimelineItem>
              <TimelineOppositeContent
                key={item.title}
                variant="body1"
                sx={{ marginTop: 1 }}
                color="black"
              >
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  {item.icon == "FaPizzaSlice" ? <FaPizzaSlice /> : null}
                  {item.icon == "FaWineGlassAlt" ? <FaWineGlassAlt /> : null}
                  {item.icon == "FaBriefcase" ? <FaBriefcase /> : null}
                  {item.icon == "FaTruck" ? <FaTruck /> : null}
                  
                </TimelineDot>
                {item.workPlace === "Dalaman" ? null : (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h3 className="text-xl font-bold font-titleFont text-textColor">
                  {item.title}
                </h3>
                <p className="text-md italic text-black">
                  {" "}
                  {item.workPlace}
                </p>
                <p className="text-lg">{item.subtitle}</p>
                
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </div>
  );
};

export default WorkTimeLine;
