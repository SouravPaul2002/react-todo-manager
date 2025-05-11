import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        Welcome to my very first React project! <span role="img" aria-label="rocket">🚀</span>
      </p>
      <p>
        This is a simple TODO list app built with React to help me learn the fundamentals of component-based architecture, state management, and routing.
      </p>
      <p>
        I plan to expand it over time by adding features like local storage, themes, and maybe even a backend!
      </p>
      <p>
        Thanks for checking it out! <span role="img" aria-label="smile">😊</span>
      </p>
      <p>
        Made with <span role="img" aria-label="love">❤️</span> by RoNi
      </p>
    </div>
  );
};

export default About;
