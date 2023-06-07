import React from 'react'
// import Tilt from 'react-tilt';
// import * as Tilt from 'react-tilt';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
 import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

//for the cards
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      // className='w-full bg-gradient-to-r from-red-500 to-purple-500 p-[1px] rounded-[20px] shadow-card'
      className='w-full bg-gradient-to-b from-red-500 to-purple-500 p-[1px] rounded-[20px] shadow-card'


    >
       <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain mx-auto'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
      
     
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <div className='w-full text-center'> {/* New container */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto' 
        >
          I'm Arnav Jain, a Computer Science undergrad at the University of Colorado at Boulder. 
          My main focus areas are programming in various languages (C++, JavaScript, Python to name a few) 
          and exploring the dynamic world of machine learning and AI. I believe in continuous learning and 
          applying my knowledge to solve complex problems. Stay connected to follow my journey in deepening 
          my expertise in AI and other emerging technologies.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}


export default SectionWrapper(About, "about");