import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import NavbarLink from "../constants/enums";
import { Education as EducationType } from '../constants/types';

type EducationProps = EducationType;

const EducationCard: React.FC<EducationProps> = (props) => {
    const { degree, university, grade, points, icon, iconBg, date } = props;

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
                        alt={university}
                        className='w-[70%] h-[70%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {degree}
                </h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {university}<br />
                    {grade}
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

export const EducationContent = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>WHAT DEGREES HAVE I COMPLETED</p>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <EducationCard
                            key={index}
                            degree={education.degree}
                            university={education.university}
                            grade={education.grade}
                            date={education.date}
                            icon={education.icon}
                            iconBg={education.iconBg}
                            points={education.points}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

const Education = SectionWrapper(EducationContent, NavbarLink.EDUCATION.toLowerCase());

export default Education;