import React from 'react';
import {Pc, Mobile, Tablet} from '../../../common/MediaQuery';
import { useMediaQuery } from "react-responsive"
import { ReactComponent as MenuOpenButton } from '../../../assets/images/icons/icon-menu.svg';
import { ReactComponent as MenuCloseButton } from '../../../assets/images/icons/icon-close.svg';

const MenuButtonBtn = () => {

    const navSlide = (val) => {
        const nav = document.querySelector('nav');
        val ? nav.classList.add('open') : nav.classList.remove('open');
    }

    const menuBtnClick = (e) => {
        const navChk = e.target.closest('.btn-type1');
        if( navChk.classList.contains('open') ){
            navChk.classList.remove('open')
            navChk.classList.add('close')
            navSlide(false);
        }
        else{
            navChk.classList.add('open')
            navChk.classList.remove('close')
            navSlide(true);
        }
    }

    return (
        <button type='button' className='btn-type1 close' onClick={menuBtnClick}>
            <MenuOpenButton width={20} height={20} className='close' />
            <MenuCloseButton width={20} height={20} className='open' />
        </button>
    );
};

export default MenuButtonBtn;