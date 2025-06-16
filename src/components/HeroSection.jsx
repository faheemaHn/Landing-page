import React from 'react';
import { motion } from 'framer-motion';
import collaborateImage from '../assets/collaborate.png'; 
import elementWave from '../assets/Element.png';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <motion.section
      className="hero"
      style={{
        backgroundImage: `url(${elementWave})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-left">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Get More Done With <br /> Whitepace
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
        </motion.p>

        <motion.button
          className="try-btn"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Try Whitepace
        </motion.button>
      </div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <img src={collaborateImage} alt="Collaboration" className="hero-img" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
