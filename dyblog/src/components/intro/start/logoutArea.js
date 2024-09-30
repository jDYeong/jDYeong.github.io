import React, { useEffect, useState } from 'react';
import * as S from "./start.style.js"
import { ReactComponent as InputId } from '../../../assets/images/icons/icon-id.svg';
import { ReactComponent as InputPw } from '../../../assets/images/icons/icon-password.svg';
import { db } from '../../../firebase'
import { getDoc, doc } from 'firebase/firestore'

import axios from 'axios';
import useFetch from '../../../hooks/useFetch';

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
                props.updateLoginResult(true);
            }
            else{
                setErrType(true)
                setTimeout(() => setErrType(false), 1000);
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