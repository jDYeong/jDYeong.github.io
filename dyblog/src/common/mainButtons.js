import React from 'react';
import LinkIntro from '../components/common/linkIntro';
import ThemeButton from '../components/common/themeButton';

const MainButtons = () => {
    return (
        <div className='main-btns'>
            <ThemeButton />
            <LinkIntro />
        </div>
    );
};

export default MainButtons;