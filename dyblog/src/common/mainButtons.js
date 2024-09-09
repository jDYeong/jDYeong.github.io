import React from 'react';
import {Mobile, Tablet} from './MediaQuery';
import LinkIntro from '../components/common/linkIntro';
import ThemeButton from '../components/common/themeButton';
import MenuButton from '../components/common/menuButton';
import Footer from './footer';

const MainButtons = () => {
    return (
        <div className='main-btns'>
            <ThemeButton />
            <LinkIntro />
            <Tablet><MenuButton /></Tablet>
            <Mobile><MenuButton /></Mobile>
            </div>
    );
};

export default MainButtons;