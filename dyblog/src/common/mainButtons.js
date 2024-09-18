import React from 'react';
import {Pc, Mobile, Tablet} from './MediaQuery';
import LinkIntroBtn from '../components/common/linkIntro'
import MenuOpenButtonBtn from '../components/common/menuButton'
import ThemeButtonBtn from '../components/common/themaButton'

const MainButtons = () => {
    return (
        <div className='main-btns'>
            <ThemeButtonBtn />
            <LinkIntroBtn />

            <Tablet><br /></Tablet>
            <Mobile><br /></Mobile>
            
            <Tablet><MenuOpenButtonBtn /></Tablet>
            <Mobile><MenuOpenButtonBtn /></Mobile>
        </div>
    );
};

export default MainButtons;