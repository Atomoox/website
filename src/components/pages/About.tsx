import { ExternalLink } from "../micro/ExternalLink";

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
import { Technology } from "../micro/Technology";

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