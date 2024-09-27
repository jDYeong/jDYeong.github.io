import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from "./err.style.js"

const Error = () => {

    //이전화면으로 가기
    const history = useHistory();
    const onCancel = () =>{
        history.goBack();
    }

    return (
        <S.ErrContent>
            <S.ErrTit>OOPS!</S.ErrTit>
            <S.ErrTxt>존재하지 않는 페이지입니다.</S.ErrTxt>
            <S.ErrBackBtn type='button' className='btn_err' onClick={onCancel}>이전화면</S.ErrBackBtn>
        </S.ErrContent>
    );
};

export default Error;