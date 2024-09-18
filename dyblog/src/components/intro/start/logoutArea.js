import React from 'react';
import * as S from "./start.style.js"
import { ReactComponent as InputId } from '../../../assets/images/icons/icon-id.svg';
import { ReactComponent as InputPw } from '../../../assets/images/icons/icon-password.svg';

const logoutArea = () => {

    const loginClick = () => {
        console.log('login click')
    }
    

    return (
        <S.LoginArea>
            <p>Admin Login</p>
            <S.InpWrap $error={false}>
                <S.InpBox>
                    <S.Inp type={'text'} />
                    <InputId />
                </S.InpBox>
                <S.InpBox>
                    <S.Inp type={'password'} />
                    <InputPw />
                </S.InpBox>
            </S.InpWrap>
            <S.TextButton type='button' onClick={loginClick}>Sign in</S.TextButton>
        </S.LoginArea>
    );
};

export default logoutArea;