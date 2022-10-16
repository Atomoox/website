import { useRef } from 'react';

import { SubmitButton } from '../micro/SubmitButton';

import '../../styles/micro/input.scss';
import { useEffect, useState } from 'react';

const Contact = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (status === 'error') {
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }
    }, [status]);

    const sendMessage = async (email: string, message: string) => {
        if (status !== 'idle') return;

        setStatus('loading');

        let response;

        try {
            response = await fetch('message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    message
                })
            });
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
                If you have any question about my work or any inquiry, feel free to send me a message. I’ll answer as soon as possible!
            </div>

            <div className="flex--column input--displays">
                <div className="flex--column input--wrapper">
                    <div className="label">
                        Email address
                    </div>
                    <input ref={emailRef} placeholder="johndoe@gmail.com"/>
                </div>

                <div className="flex--column input--wrapper">
                    <div className="label">
                        Message
                    </div>
                    <textarea
                        ref={messageRef}
                        placeholder='Hi, I would like to know more about your work' 
                        cols={50}
                        rows={10}
                    />
                </div>
                
                <SubmitButton 
                    status={status} 
                    onClick={() => sendMessage(emailRef.current!.value, messageRef.current!.value)}
                />
            </div>
        </div>
    )
};

export { Contact };