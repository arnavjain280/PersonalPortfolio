import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 2)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>
          Get in Touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>

        {/* Contact Card */}
        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="text-pink-500 font-medium mb-4">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/arnav-jain28/"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >
              arnav-jain28
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-pink-500 font-medium mb-4">
              Email me at
            </span>
            <a

              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >
              arnav.jain823@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}



export default SectionWrapper(Contact, "contact");