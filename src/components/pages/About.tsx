import { PROJECTS } from "../../types";
import { Project } from "../micro/Project";

import '../../styles/micro/project.scss';

const About = () => {
    return (
        <div className="flex--column page">
            <div className="flex--row">
            </div>
            <div className="flex--column">
                <div className="title">
                    Morning, i’m Clément,
                </div>
                <div className="text">
                    a 18 years old software engeneer from France 🇫🇷 studying Computer Science at the IUT Montpellier-Sète.
                </div>
            </div>

            <div className="flex--column">
                <div className="subtitle">
                    My projects 💭 
                </div>

                <div className="text">
                    In 4 years of coding, i’ve had the time to do many projects, alot of them going straight to the archive folders. But in between 2 fun or personal projects, here’s some projects with real objectives and infrastructure 🤠
                </div>
            </div>

            <div className="flex--row project--wrapper">
                {PROJECTS.map((props) => (
                    <Project {...props}/>
                ))}
            </div>

            <div className="flex--column">
                <div className="subtitle">
                    Technologies ⌨ 
                </div>

                <div className="text">
                    I use a wide range of tools to engineer and develop scalable and efficient solutions. Here are the ones i am the most proefficient with 💥
                </div>
            </div>
        </div>
    )
};

export { About };