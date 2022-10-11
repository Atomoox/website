import { EVENTS } from "../../types";
import { TimelineEvent } from "../micro/TimelineEvent";

import '../../styles/micro/timelineEvents.scss';

const Me = () => {
    return (
        <div className="flex--column page">
            <div className="title">
                About me
            </div>

            <div className="section">
                <div className="subtitle">
                    Hobbies ✨
                </div>

                <div className="text">
                    Code being my favorite thing to do, i also enjoy many other things. Listening to music and playing video games are both activities i love doing
                </div>
            </div>

            <div className="section">
                <div className="subtitle">
                    Education and projects timeline 📚 
                </div>

                <div className="text">
                    To pursue my passion for coding, i had to deal with courses, exams and personal projects at the same time. It wasn’t that easy to keep up,  but i did the best i could to do well in both. Here’s a timeline of my projects along with major events of my education.
                </div>
            </div>

            <div className="separator"/>

            <div className="flex--column timeline--wrapper">
                 {EVENTS.map(event => (
                    <TimelineEvent {...event}/>
                 ))}
            </div>
        </div>
    )
};

export { Me };