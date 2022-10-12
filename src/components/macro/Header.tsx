import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
        return (
            <AnimatePresence>
                {!isOpened && (
                    <motion.div 
                        className="flex--row header"
                    >
                        <Burger onClick={() => setIsOpened(true)}/>
                        <div className="flex--row resume--wrapper">
                            <div>
                                Resume
                            </div>
                            <Download />
                        </div>
                    </motion.div>
                )}
                {isOpened && (
                    <motion.div
                        className="flex--column burger--wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Close onClick={() => setIsOpened(false)}/>
                        <div className="title">
                            Navigation
                        </div>
                        <div className="flex--column nav--wrapper">
                            <div className="nav flex--column">
                                <div className="name">
                                    ./about
                                </div>
                                <div className="description">
                                    Home page, know more about me
                                </div>
                            </div>
                            <div className="nav flex--column">
                                <div className="name">
                                    ./contact
                                </div>
                                <div className="description">
                                    Have a question ? Leave it here!
                                </div>
                            </div>
                            <div className="nav flex--column">
                                <div className="name">
                                    ./me
                                </div>
                                <div className="description">
                                    Education, hobbies, in depth self description.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
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