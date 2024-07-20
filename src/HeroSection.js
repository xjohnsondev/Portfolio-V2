import React from 'react';
import './HeroSection.css';

const HeroSection = () => {

    const scrollToNextSection = () => {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="hero-section">
            <div className="content">
                <h5 className="hello-world">Hello, World</h5>
                <h1 className="name">I'm Xavier Johnson</h1>
                <div className="roles">
                    <span className="divider">|</span>
                    <span>Full-Stack Developer</span>
                    <span className="divider">|</span>
                    <span>Mobile Developer</span>
                    <span className="divider">|</span>
                </div>
                <div className="more-about-me" onClick={scrollToNextSection}>
                    <span>More About Me</span>
                </div>
                <ul className='link-list'>
                    <li>
                        <a href="https://github.com/xjohnsondev" className='hero-link' target="_blank" rel="noopener noreferrer">
                            <i className="devicon-github-original hero-icon"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/xjohnsondev/" className='hero-link' target="_blank" rel="noopener noreferrer">
                            <i className="devicon-linkedin-plain hero-icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HeroSection;