import { useLocation } from 'react-router-dom';

import { HeaderNav } from '../micro/HeaderNav';

import { ROUTES } from '../../types';

import '../../styles/macro/header.scss';

const Header = () => {
    const location = useLocation();
    return (
        <div className="flex--row header">
            {ROUTES.map((route) => (
                <HeaderNav 
                    key={route} 
                    route={route}
                    isSelected={location.pathname === route}
                />
            ))}
        </div>
    );
};

export { Header };