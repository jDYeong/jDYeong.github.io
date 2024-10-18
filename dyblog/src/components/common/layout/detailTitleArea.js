import React from 'react';
import * as S from './layout.style'

const DetailTitleArea = (props) => {
    return (
        <S.DetailTitleArea>
            <S.DetailCateArea>
                <S.DetailCate>{props.cate}</S.DetailCate>
                <S.DetailDate>{props.date}</S.DetailDate>
            </S.DetailCateArea>
            <S.DetailTitle>{props.title}</S.DetailTitle>
            <S.DetailSubTitle>{props.subTitle}</S.DetailSubTitle>
        </S.DetailTitleArea>
    );
};

export default DetailTitleArea;