import React from 'react';
import * as S from "./start.style.js"
import { ReactComponent as IconSuccess } from '../../../assets/images/icons/icon-success.svg';

const loginArea = ( props ) => {

    const logoutClick = () => {
        props.updateLoginResult(false);
    }
    
    return (
        <S.LoginArea>
            <p>어서와!</p>
            <S.IconBox>
                <IconSuccess />
            </S.IconBox>
            <S.TextButton type='button' onClick={logoutClick}>Sign out</S.TextButton>
        </S.LoginArea>
    );
};

export default loginArea;