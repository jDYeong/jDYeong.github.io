import React, { useEffect, useState } from 'react';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import { ReactComponent as ImgThemeMoonButton } from '../../assets/images/icons/theme-moon.svg';
import { ReactComponent as ImgThemeSunButton } from '../../assets/images/icons/theme-sun.svg';

const ThemeButtonBtn = () => {

    const themaBtnClick = () => {
        const themaDiv = document.querySelector('.bg');

        if( themaDiv.classList.contains('lightMode') ){
            themaDiv.classList.remove('lightMode')
            themaDiv.classList.add('darkMode')
            localStorage.setItem("thema", JSON.stringify('darkMode'));
        }else{
            themaDiv.classList.remove('darkMode')
            themaDiv.classList.add('lightMode')
            localStorage.setItem("thema", JSON.stringify('lightMode'));
        }
    }

    //변경된 값(darkMode or lightMode) 로컬스토리지에 전달 

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