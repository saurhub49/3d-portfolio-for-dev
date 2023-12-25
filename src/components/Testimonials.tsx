import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import NavbarLink from '../constants/enums';
import { IndexType, Testimonial as TestimonialType } from '../constants/types';


type TestimonialCardProps = TestimonialType & IndexType;

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  const { index, name, designation, company, image, testimonial } = props;

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>
        "
      </p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>
          {testimonial}
        </p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>{name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation}{company !== '' && `, ${company}`}
            </p>
          </div>

          <img
          src={image}
          alt={name}
          className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>


    </motion.div>
  )
};

const TestimonialsContent = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>
            WHAT OTHERS SAY
          </p>
          <h2 className={styles.sectionHeadText}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = SectionWrapper(TestimonialsContent, NavbarLink.TESTIMONIALS);

export default Testimonials;