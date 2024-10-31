import React from 'react';
import ReactNative from "./images/react-native.svg";
import Python from "./images/python.svg";
import Headshot from './images/headshot.jpg'
import Resume from './images/XavierJohnsonResume.pdf'
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section" id='about-section'>
            <div className="about-content">
                <div className="about-heading">
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>
                    <div className="profile-section">
                        <img src={Headshot} alt="Profile" className="profile-pic" />
                        <p>I am a Software Engineer with a proven track record in delivering high-quality solutions. Skilled in analyzing complex problems and implementing effective, innovative solutions. A collaborative team player focused on achieving organizational goals through technical excellence and innovation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-info">
                <div className="profile">
                    <h3>Profile</h3>
                    <p>I bring a dedicated and thoughtful approach to software development, aiming to deliver solutions that are both effective and innovative. My work is guided by a strong commitment to quality and collaboration.</p>
                    <ul>
                        <li><strong>Fullname:</strong><br></br>Xavier Johnson</li>
                        <li><strong>Services:</strong> <br></br>Full-Stack Developer, Mobile Developer</li>
                        <li><strong>Email:</strong><br></br>xjohnsondev@gmail.com</li>
                        <li><strong>Website:</strong><br></br>https://xjohnsondev.github.io/Portfolio-V2/</li>
                        <li><strong>Github:</strong><br></br>https://github.com/xjohnsondev</li>
                    </ul>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <p>Specializing in developing comprehensive software solutions, I bring a strong focus on creating intuitive and high-performance applications. My expertise lies in applying best practices and innovative techniques to tackle complex challenges and deliver results that meet and exceed expectations.</p>
                    <div className='skill-tree'>
                        <i className="devicon-html5-plain-wordmark colored skill"></i>
                        <i className="devicon-css3-plain-wordmark colored skill"></i>
                        <i className="devicon-javascript-plain colored skill"></i>
                        <i className="devicon-react-original-wordmark colored skill"></i>
                        <img src={ReactNative} alt="React Native Logo" className='skill' style={{ 'marginTop': '-5px' }} />
                        <i className="devicon-express-original-wordmark colored skill"></i>
                        <i className="devicon-nodejs-plain-wordmark colored skill"></i>
                        <img src={Python} alt="Python Logo" className='skill' style={{ 'marginLeft': '10px' }} />
                        <i className="devicon-flask-original-wordmark colored skill"></i>
                        <i className="devicon-postgresql-plain-wordmark colored skill"></i>
                        <i className="devicon-git-plain-wordmark colored skill"></i>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <a href={Resume} download="XavierJohnsonResume.pdf">
                    <button className="download-cv">Download CV</button>
                </a>            
            </div>
        </section>
    );
};

export default AboutSection;
