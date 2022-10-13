import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { HeaderNav } from '../micro/HeaderNav';

import { ROUTES } from '../../types';

import { ReactComponent as Download } from '../../assets/download.svg';
import { ReactComponent as Burger } from '../../assets/burger.svg'; 
import { ReactComponent as Close } from '../../assets/close.svg'; 

import '../../styles/micro/resume.scss';
import '../../styles/macro/header.scss';
import '../../styles/macro/burger.scss';


const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isOpened, setIsOpened] = useState<boolean>(false);

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
    
    const MobileHeader = () => {
        const nav = (route: string) => {
            navigate(route);
            setIsOpened(false);
        }
        return (
            <>
                {!isOpened && (
                    <div 
                        className="flex--row header"
                    >
                        <Burger onClick={() => setIsOpened(true)}/>
                        <div className="flex--row resume--wrapper">
                            <div>
                                Resume
                            </div>
                            <Download />
                        </div>
                    </div>
                )}
                {isOpened && (
                    <div
                        className="flex--column burger--wrapper"
                    >
                        <Close onClick={() => setIsOpened(false)}/>
                        <div className="title">
                            Navigation
                        </div>
                        <div className="flex--column nav--wrapper">
                            <div className="nav flex--column" onClick={() => nav('/about')}>
                                <div className="name">
                                    ./about
                                </div>
                                <div className="description">
                                    Home page, know more about me
                                </div>
                            </div>
                            <div className="nav flex--column" onClick={() => nav('/contact')}>
                                <div className="name">
                                    ./contact
                                </div>
                                <div className="description">
                                    Have a question ? Leave it here!
                                </div>
                            </div>
                            <div className="nav flex--column" onClick={() => nav('/me')}>
                                <div className="name">
                                    ./me
                                </div>
                                <div className="description">
                                    Education, hobbies, in depth self description.
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }

    if (isMobile) return MobileHeader();

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