import React from 'react';
import {Pc, Mobile, Tablet} from './MediaQuery';
import LinkIntroBtn from '../components/common/buttons/linkIntro'
import MenuOpenButtonBtn from '../components/common/buttons/menuButton'
import ThemeButtonBtn from '../components/common/buttons/themaButton'

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