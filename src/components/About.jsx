import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            onClick={() => window.open(link, "_blank")}
            className="text-white text-[20px] font-bold text-center cursor-pointer"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        A dedicated and ambitious professional seeking a role in an organization
        that offers opportunities for personal and professional growth. Aiming
        to utilize my skills and experience to contribute to the success of the
        organization while continuously developing my knowledge and expertise.
        Strong desire to work in a collaborative and innovative environment
      </motion.p>

      <h1 className={` text-white text-4xl font-semibold mt-20`}>
        Some of my blogs.
      </h1>
      <div className="mt-10 flex flex-wrap gap-10 ">
        {services.map((service, index) => {
          return (
            <ServiceCard
              className=""
              link={service.link}
              key={service.title}
              index={index}
              {...service}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
