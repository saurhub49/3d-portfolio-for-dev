import React, { useCallback } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import NavbarLink from '../constants/enums';
import { IndexType, Project as ProjectType } from '../constants/types';
import { Tilt } from 'react-tilt';

type ProjectCardProps = ProjectType & IndexType;

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { index, name, description, image, link, extraLink, tags } = props;

  const onClickGithubIconHandler = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      window.open(event.currentTarget.id, "_blank");
    },
    [],
  );


  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              id={link}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              onClick={onClickGithubIconHandler}
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {!!extraLink &&
              <div
                id={extraLink}
                className='ml-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                onClick={onClickGithubIconHandler}
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text[14px]'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, tagIndex) => (
            <p
              key={tagIndex}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const ProjectsContent = (): React.ReactElement => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT HAVE I WORKED ON</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Collection of work which showcases my dedication and expertise as a software developer through a range of diverse projects.
          Highlighting my skills and creativity, each project demonstrates my ability to utilize cutting-edge technologies and innovative methodologies.
          Through a blend of innovation, problem-solving, and collaboration, I have navigated complex challenges, contributing to my growth and proficiency in software development.
          In essence, this portfolio underscores my technical prowess, creative acumen, and commitment to excellence in the ever-evolving landscape of technology.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

const Projects = SectionWrapper(ProjectsContent, NavbarLink.PROJECTS.toLowerCase());

export default Projects;