import React from "react";
import WorkTimeLine from "./WorkTimeline";
import EducationTimeline from "./EducationTimeline";
import Title from "../Layouts/Title";

const Timeline = () => {
  return (
    <section id="career" className="w-full py-10 border-b-[1px] border-b-black">
      <Title title="Career & education" des="Where have I been" />
      <div className="flex flex-col lg:flex-row gap-10">
        <WorkTimeLine />
        <EducationTimeline />
      </div>
    </section>
  );
};

export default Timeline;
