import React from 'react';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import { ReactComponent as MenuOpenButton } from '../../components/images/icons/icon-menu.svg';
import { ReactComponent as MenuCloseButton } from '../../components/images/icons/icon-close.svg';

const MenuButtonBtn = () => {

    const menuBtnClick = (e) => {
        const navChk = e.target.closest('.btn-type1');

        if( navChk.classList.contains('open') ){
            navChk.classList.remove('open')
            navChk.classList.add('close')
        }else{
            navChk.classList.add('open')
            navChk.classList.remove('close')
        }
    }
    
    return (
        <button type='button' className='btn-type1 close' onClick={menuBtnClick}>
                <Pc>
                    <MenuOpenButton width={24} height={24} className='close' />
                    <MenuCloseButton width={24} height={24} className='open' />
                </Pc>
                <Tablet>
                    <MenuOpenButton width={20} height={20} className='close' />
                    <MenuCloseButton width={20} height={20} className='open' />
                </Tablet>
                <Mobile>
                    <MenuOpenButton width={20} height={20} className='close' />
                    <MenuCloseButton width={20} height={20} className='open' />
                </Mobile>
            </button>
    );
};

export default MenuButtonBtn;