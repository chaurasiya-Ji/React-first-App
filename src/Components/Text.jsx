import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Text = () => {
  // Create a reference to the DOM element that will hold the typing animation
  const el = useRef(null);

  useEffect(() => {
    // Options for the Typed.js
    const options = {
      strings: ['<i>"Welcome to the CodeBlog. Here, you will find insightful articles, tutorials, and tips on various programming languages and technologies."</i>'],
      typeSpeed: 30,
    };

    // Initialize Typed.js
    const typed = new Typed(el.current, options);

    // Cleanup Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} id="element"></span>
    </div>
  );
};

export default Text;
