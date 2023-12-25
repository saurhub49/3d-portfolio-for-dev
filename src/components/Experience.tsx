import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import NavbarLink from "../constants/enums";
import { Experience as ExperienceType, IndexType } from "../constants/types";

type ExperienceCardProps = IndexType & ExperienceType;

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const { title, companyName, date, icon, iconBg, points } = props;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={icon}
            alt={companyName}
            className='w-[65%] h-[65%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0}}>
          {companyName}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {
            points.map((point, index) => (
              <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))
          }
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}


const ExperienceContent = (): React.ReactElement => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              index={index}
              title={experience.title}
              companyName={experience.companyName}
              date={experience.date}
              icon={experience.icon}
              iconBg={experience.iconBg}
              points={experience.points}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const Experience = SectionWrapper(ExperienceContent, NavbarLink.EXPERIENCE.toLowerCase());

export default Experience;