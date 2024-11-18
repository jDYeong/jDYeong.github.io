import React from 'react';
import NewPostBtn from './newPostButton.js'
import * as S from "./layout.style.js"
import { useHistory } from 'react-router-dom';

const ListTitleArea = ( {loginState, ...props}) => {
    const history = useHistory();
    
    let pathname = history.location.pathname;
    let name = pathname.split('/');

    return (
        <S.ListTitleArea>
            <S.ListTitle>{props.title}</S.ListTitle>
            
            {/*  관리자 전용 등록버튼(note) */}
            {
                name[1] === 'note'
                ? loginState ? <S.BtnArea><NewPostBtn /></S.BtnArea> : null
                : null
            }
            
        </S.ListTitleArea>
    );
};

export default ListTitleArea;