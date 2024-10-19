import React from 'react';
import * as S from './layout.style'
import { useHistory } from 'react-router-dom';
import { db } from '../../../firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { ReactComponent as ArrRightLong } from '../../../assets/images/icons/arr-right-long.svg';
import { ReactComponent as IconModify } from '../../../assets/images/icons/icon-modify.svg';
import { ReactComponent as IconList } from '../../../assets/images/icons/icon-menu.svg';
import { ReactComponent as IconDelete } from '../../../assets/images/icons/icon-delete.svg';
import { Pc } from '../../../common/MediaQuery';

const DetailPagingArea = ({ data, noteId, prevDoc, nextDoc, loginState }) => {
    const history = useHistory();

    const handlePrevClick = () => {
        if (prevDoc) {
            history.push(`/note/detail/${prevDoc.id}`); // 이전 문서로 이동
        }
    };

    const handleNextClick = () => {
        if (nextDoc) {
            history.push(`/note/detail/${nextDoc.id}`); // 다음 문서로 이동
        }
    };

    const handleDeleteClick = async () => {
        try{
            await deleteDoc(doc(db, 'note', noteId));
            history.push(`/note`); // 목록으로 이동
        }
        catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    const handleModifyClick = async () => {
        history.push('/private/admin_note', { noteId, editMode:true });
    }

    return (
        <S.DetailPagingArea className='detail_paging_area'>
            <S.ArrBtn $prev onClick={handlePrevClick} disabled={!prevDoc}>
                <ArrRightLong />
                <span>이전글</span>
                <p>{prevDoc ? prevDoc.title : '이전글이 없습니다.'}</p>
            </S.ArrBtn>
            <S.CenterBtns>
                <S.LinkBtn to={`/note`} className='btn-type1 btn-list'><IconList /></S.LinkBtn>
                {loginState ? <S.UpdateBtnBottom  onClick={handleModifyClick} className='btn-type1 btn-modify'><IconModify /></S.UpdateBtnBottom> : ''}
                {loginState ? <Pc><S.DeleteBtnBottom className='btn-type1 btn-delete' onClick={handleDeleteClick}><IconDelete /></S.DeleteBtnBottom></Pc> : ''}
            </S.CenterBtns>
            <S.ArrBtn $next onClick={handleNextClick} disabled={!nextDoc}>
                <p>{nextDoc ? nextDoc.title : '다음글이 없습니다.'}</p>
                <span>다음글</span>
                <ArrRightLong />
            </S.ArrBtn>
        </S.DetailPagingArea>
    );
};

export default DetailPagingArea;