import React from 'react';
import * as S from "./start.style.js"

const aboutme = () => {
    return (
        <S.AboutMe className="aboutme_box">
            <S.AboutMeTxt>
                <S.AboutMeTit>About ME</S.AboutMeTit>
                <S.AboutMeDesc>안녕하세요, 문제 해결에 긍정적인 태도로 접근하며, 항상 성실하고 책임감 있게 업무에 임하는 웹퍼블리셔 정다영입니다.
                    <a href="https://scarlet-azimuth-07d.notion.site/JeongDaYeong-11bc39268c6580dfbb45dbbe56fcb02a" target='_black'>노션으로 보기  &gt;</a>
                </S.AboutMeDesc>
            </S.AboutMeTxt>
        </S.AboutMe>
    );
};

export default aboutme;