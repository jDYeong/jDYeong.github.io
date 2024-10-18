import React from 'react';
import NewPostBtn from './newPostButton.js'
import * as S from "./layout.style.js"

const ListTitleArea = ( {loginState, ...props}) => {
    return (
        <S.ListTitleArea>
            <S.ListTitle>{props.title}</S.ListTitle>
            
            {/*  관리자 전용 등록버튼 */}
            {loginState ? <S.BtnArea><NewPostBtn /></S.BtnArea> : ''}
        </S.ListTitleArea>
    );
};

export default ListTitleArea;