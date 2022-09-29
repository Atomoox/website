interface TimelineEventProps {
    title: string;
    details?: string;
    date: string;
}

const TimelineEvent = (props: TimelineEventProps) => {
    return (
        <div className="flex--row event">
            <div className="flex--row name">
                <div className="title">
                    {props.title}
                </div>
                {props.details && (
                    <>
                        <div>
                            -
                        </div>
                        <div className="details">
                            {props.details}
                        </div>
                    </>
                )}
            </div>
            <div className="date">
                {props.date}
            </div>
        </div>
    )
};  

export { TimelineEvent };