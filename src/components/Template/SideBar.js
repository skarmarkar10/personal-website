import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/shriyaTrad.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shriya Karmarkar</h2>
        <p>
          she/her
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shriya. I am a University of Michigan alum with a degree in BCN
        (Biopsychology, Cognition, and Neuroscience), the Director of Finance at {' '}
        <a href="https://www.perfectpair.org/">Perfect Pair</a>, and a clinical research coordinator at {' '}
        <a href="https://www.brighamandwomens.org/">Brigham and Women&apos;s Hospital.</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
