import React from 'react';
import LinkIntroBtn from '../components/common/linkIntro'
import MenuOpenButtonBtn from '../components/common/menuButton'
import ThemeButtonBtn from '../components/common/themeButton'

const MainButtons = () => {


    return (
        <div className='main-btns'>
            <ThemeButtonBtn />
            <LinkIntroBtn />
            <MenuOpenButtonBtn />
        </div>
    );
};

export default MainButtons;