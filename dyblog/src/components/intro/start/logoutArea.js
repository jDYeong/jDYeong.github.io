import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from "./start.style.js"
import { ReactComponent as InputId } from '../../../assets/images/icons/icon-id.svg';
import { ReactComponent as InputPw } from '../../../assets/images/icons/icon-password.svg';
import useFetch from '../../../hooks/useFetch';
import { db } from '../../../firebase'
import { getDoc, doc } from 'firebase/firestore'


const LogoutArea = ( props ) => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    
    const [errType, setErrType] = useState(false);

    // useEffect(async() => {

    // })

    const onSubmit = async() => {
        const tweetDoc = await getDoc(doc(db, 'admin', 'login'));
        const tweetData = tweetDoc.data();
        
        if (tweetDoc.exists()) {
            const result = tweetData.memId === id && tweetData.memPw === pw;
            if(result){
                setErrType(false)
                //setLogIn(true);
                props.updateLoginResult(true);
                //console.log('로그인 성공')
            }
            else{
                setErrType(true)
                setTimeout(() => setErrType(false), 1000);
                //setLogIn(false);
                props.updateLoginResult(false);
            }
        }
    }

    return (
        <S.LoginArea>
            <p>Admin Login</p>
            <form action="">
                <S.InpWrap $error={errType}>
                    <S.InpBox>
                        <S.Inp type={'text'} onChange={(e) => setId(e.target.value)} />
                        <InputId />
                    </S.InpBox>
                    <S.InpBox>
                        <S.Inp type={'password'} onChange={(e) => setPw(e.target.value)} />
                        <InputPw />
                    </S.InpBox>
                </S.InpWrap>
                <S.TextButton type="button" onClick={onSubmit}>Sign in</S.TextButton>
            </form>
        </S.LoginArea>
    );
};

export default LogoutArea;