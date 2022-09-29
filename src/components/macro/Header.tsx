import { useLocation } from 'react-router-dom';

import { HeaderNav } from '../micro/HeaderNav';

import { ROUTES } from '../../types';

import '../../styles/macro/header.scss';
import { HireMe } from '../micro/HireMe';

const Header = () => {
    const location = useLocation();
    
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
            <HireMe />
        </div>
    );
};

export { Header };