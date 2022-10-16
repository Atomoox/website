import { useEffect, useState } from "react";

import { EVENTS } from "../../types";
import { TimelineEvent } from "../micro/TimelineEvent";

import '../../styles/micro/timelineEvents.scss';

const Me = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

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
                    Code being my favorite thing to do, I also enjoy many other things. Listening to music and playing video games are both activities I love doing.
                </div>
            </div>

            <div className="section">
                <div className="subtitle">
                    Education and projects timeline 📚 
                </div>

                <div className="text">
                To pursue my passion for coding, I had to deal with courses, exams and personal projects at the same time. It wasn’t that easy to keep up, but I did the best I could to do well in both. Here’s a timeline of my projects along with the major events of my education.
                </div>
            </div>

            <div className="separator"/>

            <div className="flex--column timeline--wrapper">
                 {EVENTS.map(event => (
                    <TimelineEvent {...event} isMobile={isMobile}/>
                 ))}
            </div>
        </div>
    )
};

export { Me };