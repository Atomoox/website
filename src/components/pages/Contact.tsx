import { SubmitButton } from '../micro/SubmitButton';

import '../../styles/micro/input.scss';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (status === 'error') {
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }
    }, [status]);

    const sendMessage = async () => {
        if (status !== 'idle') return;

        setStatus('loading');

        let response;

        try {
            response = await fetch('https://tls.peet.ws/api/all', {});
        } catch {
            setStatus('error');
            return;
        }

        setStatus(response.ok ? 'success' : 'error');
    }

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
                <div className="flex--column input--wrapper">
                    <div className="label">
                        Email address
                    </div>
                    <input placeholder="johndoe@gmail.com"/>
                </div>

                <div className="flex--column input--wrapper">
                    <div className="label">
                        Message
                    </div>
                    <textarea
                        placeholder='Hi, I would like to know more about your work' 
                        cols={50}
                        rows={10}
                    />
                </div>
                
                <SubmitButton 
                    status={status} 
                    onClick={sendMessage}
                />
            </div>
        </div>
    )
};

export { Contact };