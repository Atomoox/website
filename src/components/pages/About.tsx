import { ExternalLink } from "../micro/ExternalLink";
import { Technology } from "../micro/Technology";

import { PROJECTS } from "../../types";
import { Project } from "../micro/Project";

import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';

import { ReactComponent as NodeJs } from '../../assets/nodeJs.svg';
import { ReactComponent as ReactJs } from '../../assets/react.svg';
import { ReactComponent as MongoDB } from '../../assets/mongo.svg';
import { ReactComponent as MySQL } from '../../assets/mysql.svg';
import { ReactComponent as Typescript } from '../../assets/typescript.svg';
import { ReactComponent as Postgres } from '../../assets/postgres.svg';
import { ReactComponent as Git } from '../../assets/git.svg';
import { ReactComponent as Java } from '../../assets/java.svg';
import { ReactComponent as Aws } from '../../assets/aws.svg';

import '../../styles/micro/project.scss';
import '../../styles/micro/links.scss';
import '../../styles/micro/technology.scss';

const displayDate = () => {
    const hours = new Date().getHours();
    return hours >= 5 && hours < 12 ? "Morning" : hours >= 12 && hours < 18 ? "Afternoon" : "Evening";
}

const About = () => {
    return (
        <div className="flex--column page">
            <div className="flex--row socials">
                <ExternalLink color="#1A8CD8" href="https://twitter.com/1020Forbidden" img={Twitter}/>
                <ExternalLink color="white" href="https://github.com/Atomoox" img={Github}/>
                <ExternalLink color="#1A8CD8" href="https://www.linkedin.com/in/cl%C3%A9ment-trens-b6ba82230/" img={LinkedIn}/>
            </div>
            <div className="flex--column">
                <div className="title">
                    {displayDate()}, I’m Clément,
                </div>
                <div className="text">
                    a 18 years old software engineer from France 🇫🇷 studying Computer Science at the Montpellier Institute of Technology.
                </div>
            </div>

            <div className="flex--column">
                <div className="subtitle">
                    My projects 💭 
                </div>

                <div className="text">
                    In four years of coding, I’ve had the time to develop several working projects, some of them going right to the archive folders. Amongst fun or personal activities, here are some projects developed on professional grounds with real business models. 🤠
                </div>
            </div>

            <div className="separator"/>

            <div className="flex--row project--wrapper">
                {PROJECTS.map((props) => (
                    <Project {...props}/>
                ))}
            </div>

            <div className="separator"/>
            
            <div className="flex--column">
                <div className="subtitle">
                    Technologies 🏹
                </div>

                <div className="text">
                    My coding is based on a wide range of tools to engineer and develop scalable and efficient solutions. Here are the tools I am the most proficient with 💥
                </div>
            </div>

            <div className="flex--row technologies--wrapper">
                <Technology name="NodeJS" img={NodeJs}/>
                <Technology name="ReactJS" img={ReactJs}/>
                <Technology name="MongoDB" img={MongoDB}/>
                <Technology name="MySQL" img={MySQL}/>
                <Technology name="Typescript" img={Typescript}/>
                <Technology name="Postgres" img={Postgres}/>
                <Technology name="Git" img={Git}/>
                <Technology name="Java" img={Java}/>
                <Technology name="AWS" img={Aws}/>
            </div>
        </div>
    )
};

export { About };