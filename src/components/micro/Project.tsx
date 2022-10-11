import { Technology } from "./Technology";

import { ReactComponent as Submit } from '../../assets/submit.svg';
import { ReactComponent as Link } from '../../assets/link.svg';

interface ProjectProps {
    title: string;
    catchphrase: string;
    img: string;
    role: string;
    stacks: string[];
    description: string;
    link: string;
    isCurrent: boolean;
}

const Project = (props: ProjectProps) => {
    return (
        <div className="flex--column project">
            <div className="flex--row presentation">
                <img src={props.img}/>
                <div className="flex--column">
                    <div className="flex--row">
                        <div className="flex--row title" onClick={() => window.open(props.link)}>
                            <div>{props.title}</div>
                            <Link />
                        </div>
                        {props.isCurrent && <div className="current">Current</div>}
                    </div>
                    <div className="role">
                        {props.role}
                    </div>
                </div>
            </div>
            <div className="catchphrase">
                {props.catchphrase}
            </div>

            <div className="description">
                {props.description}
            </div>
            <div className="flex--row stacks">
                {props.stacks.map((stack) => (
                    <Technology name={stack} img={Submit}/>
                ))}
            </div>
        </div>
    )
};

export { Project };