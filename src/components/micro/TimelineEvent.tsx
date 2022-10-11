interface TimelineEventProps {
    title: string;
    details?: string;
    date: string;
    isMobile: boolean;
}

const TimelineEvent = (props: TimelineEventProps) => {
    const mobileVer = () => {
        return (
            <div className="flex--column event">
                <div className="date">
                    {props.date}
                </div>
                <div className="title">
                        {props.title}
                    </div>
                {props.details && (
                    <div className="details">
                        {props.details}
                    </div>
                )}
            </div>
        )
    }
    if (props.isMobile) return mobileVer(); 
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