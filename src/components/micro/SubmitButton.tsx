import { ReactComponent as Submit } from '../../assets/submit.svg';
import { ReactComponent as Loading } from '../../assets/loading.svg';
import { ReactComponent as Error } from '../../assets/cross.svg';

import '../../styles/micro/submit.scss';

interface SubmitButtonProps {
    onClick: () => void;
    status: 'idle' | 'loading' | 'success' | 'error';
}

const SubmitButton = (props: SubmitButtonProps) => {
    let Icon, content, color, backgroundColor;

    switch (props.status) {
        case 'idle':
            color = 'black';
            backgroundColor = 'white';
            content = 'Send';
            Icon = Submit;
            break;

        case 'loading':
            color = '#F1933D';
            backgroundColor = '#F1933D20';
            content = 'Sending...';
            Icon = Loading;
            break;
            
        case 'error':
            color = '#F53563';
            backgroundColor = '#F5356320';
            content = 'Error';
            Icon = Error;
            break;
            
    }
    
    return (
        <div 
            className={`flex--row submit ${props.status}`} 
            onClick={props.onClick}
            style={{
                color,
                backgroundColor
            }}
        >
            <div className="content">
                {content}
            </div>
            <div className="icon">
                <Icon/>
            </div>
        </div>
    )
};

export { SubmitButton };