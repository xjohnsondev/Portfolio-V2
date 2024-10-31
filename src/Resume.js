import React from "react";
import './Resume.css';

const Resume = () => {
    const experiences = [
        {
            title: "Front-End Developer",
            duration: "October, 2024 - November, 2024",
            company: "Global NGO Executive Committee",
            description: "Design and implement user-friendly interfaces using React for solutions targeting e-waste; integrating third-party APIs and services to enhance functionality and user experience.",
        },
        {
            title: "Front-End Developer",
            duration: "May, 2024 - July, 2024",
            company: "Driven II Develop",
            description: "Engaged in the development of a robust real estate application as a front-end developer within an AGILE framework, while maintaining continuous communication with the UI/UX team and back-end developers to ensure seamless integration and user experience.",
        },
        {
            title: "Software Engineer Trainee",
            duration: "March, 2023 - April 2024",
            company: "Springboard",
            description: "Completed a rigorous, project-based, comprehensive curriculum covering full-stack development, including front-end and back-end technologies, algorithms, data structures, object-oriented programming, and software design principles - while receiving 1-on-1 mentorship from an industry professional.",
        },
        {
            title: "Corporate Investigator",
            duration: "August, 2023 - Present",
            company: "Wynn Resorts",
            description: "Conduct thorough investigations, ascertain conclusions, and maintain records and processes for auditing/legal purposes while working closely with risk management and human resources to mitigate liability to the company.",
        },
        {
            title: "Police Officer",
            duration: "July, 2021 - December, 2022",
            company: "City of Henderson, NV",
            description: "Performed rescue functions at accidents, emergencies, and disasters by directing traffic and administering emergency medical aid. Conducted criminal investigations by securing crime scenes, gathering evidence, and interviewing victims, witnesses, and suspects.",
        },
    ];

    const education = [
        {
            degree: "Software Engineer Career Track",
            school: "Springboard",
            completed: "April, 2024",
            description: 'Completed a rigorous, project-based, comprehensive curriculum covering full-stack development, including front-end and back-end technologies, algorithms, data structures, object-oriented programming, and software design principles - while receiving 1-on-1 mentorship from an industry professional.'
        },
        {
            degree: "Bachelor of Arts, Criminal Justice",
            school: "Delaware State University",
            completed: "December, 2015",
            description: null
        }
    ];

    return (
        <div className="resume-container">
            <h5 className="resume-heading">Resume</h5>
            <h1 className="title">More of my credentials.</h1>
            <p className="resume-description">
            Here you'll find a detailed overview of my career achievements and educational milestones. Each entry reflects my commitment to excellence and showcases my ability to adapt and thrive in dynamic environments.            </p>
            <h2 className="section-title">Experience</h2>

            <div className="experience">
                <ul className="experience-list">
                    {experiences.map(experience => (
                        <li className="experience-item" key={experience.title}>
                            <div className="experience-left">
                                <h4>{experience.title}</h4>
                                <p>{experience.duration}</p>
                            </div>
                            <div className="experience-right">
                                <h4>{experience.company}</h4>
                                <hr className="ex-right-hr"></hr>
                                <p>{experience.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="section-title">Education</h2>
            <div className="education">
                <ul className="education-list">
                    {education.map(edu => (
                        <li className="education-item" key={edu.school}>
                            <div className="education-left">
                                <h4>{edu.degree}</h4>
                                <p>Completed: {edu.completed}</p>
                            </div>
                            <div className="education-right">
                                <h4>{edu.school}</h4>
                                <hr className="ex-right-hr"></hr>
                                <p>{edu.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Resume;
