import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const About = () => {
  return (
    <div id='#about' className="about">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="heading"
      >
        <h1>About me</h1>
      </motion.div>
      <div className="content">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="content-text"
        >
          <div className="carousel">
            <div className="first-part">
              <div className="wrapper">
                <div className="first-text">
                  <h1>Front-End</h1>
                </div>
                <div className="second-text">
                  <h1>Web</h1>
                </div>
              </div>
            </div>
            <div className="second-part">
              <h1>Developer</h1>
            </div>
          </div>

          <div className="heading2">
            <div className="main-heading">
              <h2>
                I'm a <span>web developer</span> from Malappuram, India.
              </h2>
            </div>

            <div className="sub-heading">
              <h3>
                A passionate programmer with a curious mind who loves solving
                problems. I have an experience of building Web applications. I
                always strive for simple aesthetic solution and usability.
              </h3>

              <h3>Feel free to contact me!</h3>
            </div>
          </div>
        </motion.div>

        <div className="content-img">
          <motion.img
            whileInView={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            src={images.person3d}
            alt="3dImage"
          />
        </div>
      </div>
    </div>
  );
}

export default About