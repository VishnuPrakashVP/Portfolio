import React from 'react'
import "./Header.scss";
import {motion} from "framer-motion";
import { images } from '../../constants';

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div className="heading-text">
              <p className="p-text">
                Hey There <span>👋</span>
              </p>
              <h1 className="head-text">
                I'm <span>Vishnu Prakash</span>
              </h1>
            </div>
          </div>

          <div className="tag-cmp app--flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text"> |</p>
            <p className="p-text">MERN Stack</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="app__header-img">
        <div className="images">
          <motion.img
            whileInView={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            src={images.profile4}
            alt="profileImage"
            className="image-one"
          />
          <motion.img
            whileInView={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            src={images.profile}
            alt="profileImage"
            className="image-two"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Header