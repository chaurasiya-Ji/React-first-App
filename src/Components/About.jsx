import React from 'react';
import './About.css';
import teamMember1 from '../images/ashish.jpg';
import teamMember2 from '../images/harsh.jpg';
import teamMember3 from '../images/kanisth.jpg';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      
      <p>Welcome to our Coding Blog! We are passionate about coding and technology.</p>
      <p>
        Our goal is to share knowledge, tutorials, and tips on various programming languages and technologies.
        Whether you're a beginner or an experienced developer, you'll find valuable resources here.
      </p>
      <p>
        Our blog covers a wide range of topics including web development, mobile app development, data science, 
        machine learning, and much more. We believe in hands-on learning, so you will find plenty of code examples 
        and projects to help you apply what you've learned.
      </p>
      <p>
        We are a team of experienced developers, educators, and tech enthusiasts who are committed to helping 
        you stay updated with the latest trends and best practices in the industry.
      </p>
      <p>
        Join us in our journey to explore the world of coding. Let's learn and grow together!
      </p>
      <div className="team-section">
        <h3>Meet the Team</h3>
        <div className="team-members">
          <div className="team-member">
           
            <img src={teamMember1}alt="Team Member 1" />
            <h4>Ashish Chaurasiya</h4>
            <p>Full Stack Developer</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Team Member 2" />
            <h4>Harsh Shukla </h4>
            <p>Data Scientist</p>
          </div>
          <div className="team-member">
            <img src={teamMember3 } alt="Team Member 3" />
            <h4>Kanisth Yadav</h4>
            <p>Mobile App Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
