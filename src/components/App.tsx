import { Route, Routes, Navigate } from 'react-router-dom';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Me } from './pages/Me';

import { Header } from "./macro/Header";
import { Footer } from "./macro/Footer";

import '../styles/page.scss';
import '../styles/text.scss';

const App = () => {
    return (
        <div className="flex--column main--wrapper">
            <Header />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/me" element={<Me />} />
                <Route path="/*" element={<Navigate to="/about"/>} />
            </Routes>
            <Footer />
        </div>
    );
};

export { App };