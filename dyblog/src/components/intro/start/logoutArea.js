import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from "./start.style.js"
import { ReactComponent as InputId } from '../../../assets/images/icons/icon-id.svg';
import { ReactComponent as InputPw } from '../../../assets/images/icons/icon-password.svg';
import useFetch from '../../../hooks/useFetch';


const LogoutArea = () => {

    const item = useFetch('http://localhost:3001/login');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [LogIn, setLogIn] = useState(false);

    function onSubmit(){
        axios.post('http://localhost:3001/login',{ id,  pw})
            .then((res)=>{
                const result = item.data.find((item)=> item.memId === id && item.memPw === pw);
                if(result){
                    console.log("로그인 성공");
                    setLogIn(true);
                }
                else{
                    alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
                    setLogIn(false);
                }
            })
            .catch((err) => {
                console.error('에러 발생:', err);
            });
    }

    return (
        <S.LoginArea>
            <p>Admin Login</p>
            <form action="">
                <S.InpWrap $error={false}>
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