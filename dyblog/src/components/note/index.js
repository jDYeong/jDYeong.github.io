import React from 'react';
import * as S from "./index.style.js"
import ListTitleArea from '../common/layout/listTitleArea.js';
import ListArea from './components/listItem.js';

export default function Note({loginState}){

    return(
        <S.NoteContent className='note_content'>
            <ListTitleArea title={'NOTE'} loginState={loginState} />

            <S.ListContent>
                <ListArea />
            </S.ListContent>
        </S.NoteContent>
    )
}