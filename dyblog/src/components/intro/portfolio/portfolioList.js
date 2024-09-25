import React, { useState } from 'react';
import * as S from "./portfolio.style.js"

const PortfolioList = ({ title, contri, content, pageLink, logoLink }) => {

    let isOpen = false;
    let btnTxt = ['더보기', '줄이기']
    const clickMore = (e) => {
        let btn = e.target;
        if( !isOpen ){
            btn.previousElementSibling.style.display="block";
            btn.innerText=btnTxt[1]
            isOpen = true;
        }
        else{
            btn.previousElementSibling.style.display="-webkit-box";
            btn.innerText=btnTxt[0]
            isOpen = false;
        }
    }

    return (
        <S.PortfolioListItem>
            <S.PortfolioItemImg>
                <img src={logoLink} alt={title} />
                <S.PortfolioLink href={pageLink} target='_blank'><span>사이트보기</span></S.PortfolioLink>
            </S.PortfolioItemImg>
            <S.PortfolioItem>
                <S.PortfolioLItemTit>{title}</S.PortfolioLItemTit>
                <S.PortfolioItemDesc>
                    <p>{content}</p>
                    <button type='button' onClick={clickMore}>더보기</button>
                    <span>작업 기여도 {contri}%</span>
                </S.PortfolioItemDesc>
            </S.PortfolioItem>
        </S.PortfolioListItem>
    );
};

export default PortfolioList;