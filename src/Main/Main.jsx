import React from 'react';
import HeaderSection from '../Layout/HeaderSection/HeaderSection';
import { Outlet, UNSAFE_useScrollRestoration } from 'react-router-dom';
import FooterSection from '../Layout/FooterSection/FooterSection';

const Main = () => {
    UNSAFE_useScrollRestoration('auto')
    return (
        <div>
            <HeaderSection />
            <Outlet />
            <FooterSection />
        </div>
    );
};

export default Main;