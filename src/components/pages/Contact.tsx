import '../../styles/micro/input.scss';

const Contact = () => {
    return (
        <div className="flex--column page">
            <div className="title">
                Let’s get in touch!
            </div>
            <div className="text">
                If you have any question about my work or any equiry, feel free to send me a message
                i’ll anwser as soon as possible!
            </div>

            <div className="flex--column input--displays">
                <div className="input--wrapper">
                    <div className="label">
                        Email address
                    </div>
                    <input placeholder="johndoe@gmail.com"/>
                </div>

                <div className="input--wrapper">
                    <div className="label">
                        Message
                    </div>
                    <textarea
                    placeholder='Hi, I would like to know more about your work' 
                    cols={50}
                    rows={10}
                    />
                </div>
                
                <div>
                    Send
                </div>
            </div>
        </div>
    )
};

export { Contact };