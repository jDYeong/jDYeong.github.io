import React from 'react';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import { ReactComponent as ImgThemeMoonButton } from '../../components/images/icons/theme-moon.svg';
import { ReactComponent as ImgThemeSunButton } from '../../components/images/icons/theme-sun.svg';

const ThemeButtonBtn = () => {
    
    const themaBtnClick = () => {
        const themaDiv = document.querySelector('.bg');

        if( themaDiv.classList.contains('lightMode') ){
            themaDiv.classList.remove('lightMode')
            themaDiv.classList.add('darkMode')
        }else{
            themaDiv.classList.remove('darkMode')
            themaDiv.classList.add('lightMode')
        }
    }

    return (
        <button type='button' className="btn-type1" onClick={themaBtnClick}>
            <Pc>
                <ImgThemeMoonButton width={24} height={24} className='moon' />
                <ImgThemeSunButton width={24} height={24} className='sun' />
            </Pc>
            <Tablet>
                <ImgThemeMoonButton width={20} height={20} className='moon' />
                <ImgThemeSunButton width={20} height={20} className='sun' />
            </Tablet>
            <Mobile>
                <ImgThemeMoonButton width={20} height={20} className='moon' />
                <ImgThemeSunButton width={20} height={20} className='sun' />
            </Mobile>
        </button>
    );
};

export default ThemeButtonBtn;