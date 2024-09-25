import React, { useState } from 'react';
import * as C from "../intro.style.js"
import * as S from "./portfolio.style.js"
import PortfolioList from './portfolioList.js';
import {PortfolioData} from '../../common/webSIteData.js'

const Portfolio = () => {

    return (
        <S.PortfolioContent className='portfolio_content'>
            <C.IntroTitle>WEB PORTFOLIO</C.IntroTitle>
            <S.PortfolioList>
                {PortfolioData
                    .filter((e) => e.logoLink != null)
                    .map((e, i) => (
                        <PortfolioList
                            key={i}
                            id={i}
                            title={e.title}
                            contri={e.contri}
                            content={e.content}
                            pageLink={e.pageLink}
                            logoLink={e.logoLink}
                        />
                ))}
            </S.PortfolioList>
        </S.PortfolioContent>
    );
};

export default Portfolio;