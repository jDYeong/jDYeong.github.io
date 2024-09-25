import React from 'react';
import * as C from "../intro.style.js"
import * as S from "./experience.style.js"
import { ReactComponent as IconListArr } from '../../../assets/images/icons/arr-list.svg';

const Experience = () => {
    return (
        <div>
            <C.IntroTitle>EXPERIENCE</C.IntroTitle>
            <S.ExperieceRow>
                <S.ExperieceCol className='bgHover'>
                    <S.ExperieceDesc>
                        <IconListArr />
                        컨트롤에이 - HTML퍼블리싱
                    </S.ExperieceDesc>
                    <S.ExperieceDate ><b>3년 4개월</b>2021.01 ~ 2024.04</S.ExperieceDate>
                </S.ExperieceCol>
            </S.ExperieceRow>
            <S.ExperieceTit>Education</S.ExperieceTit>
            <S.ExperieceRow>
                <S.ExperieceCol className='bgHover'>
                    <S.ExperieceDesc>
                        <IconListArr />
                        웹디자인 & 웹퍼블리셔과정 수료
                    </S.ExperieceDesc>
                    <S.ExperieceDate>2020.06 ~ 2020.11</S.ExperieceDate>
                </S.ExperieceCol>
                <S.ExperieceCol className='bgHover'>
                    <S.ExperieceDesc>
                        <IconListArr />
                        경복대학교 시각디자인학과
                    </S.ExperieceDesc>
                    <S.ExperieceDate>2016.03 ~ 2020.02</S.ExperieceDate>
                </S.ExperieceCol>
            </S.ExperieceRow>
        </div>
    );
};

export default Experience;