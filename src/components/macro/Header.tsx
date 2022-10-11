import { useLocation } from 'react-router-dom';

import { HeaderNav } from '../micro/HeaderNav';
import { HireMe } from '../micro/HireMe';

import { ROUTES } from '../../types';

import { ReactComponent as Download } from '../../assets/download.svg';

import '../../styles/micro/resume.scss';
import '../../styles/macro/header.scss';


const Header = () => {
    const location = useLocation();
    
    const MobileHeader = () => {
        return (
            <div className="flex--row mobile header">
                
            </div>
        )
    }

    return (
        <div className="flex--row header">
            <div className="flex--row">
                {ROUTES.map((route) => (
                    <HeaderNav 
                        key={route} 
                        route={route}
                        isSelected={location.pathname === route}
                    />
                ))}
            </div>
            <div className="flex--row">
                <div className="flex--row resume--wrapper">
                    <div>
                        Resume
                    </div>
                    <Download />
                </div>
            </div>
            
        </div>
    );
};

export { Header };