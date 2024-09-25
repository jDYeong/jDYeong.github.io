import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as S from "./intro.style.js"
import Start from "./start/start.js"
import Skills from "./skills/skills.js"
import Experience from "./experience/experience.js"
import Works from "./works/works.js"
import Portfolio from "./portfolio/portfolio.js"


export default function Intro(){

    return(
        <S.IntroContent>
            {/* about me */}
            <S.RowContent $mobWidth>
                <Start />
            </S.RowContent>

            {/* skills */}
            <S.RowContent $width $flexColumn>
                <Skills />
            </S.RowContent>

            {/* EXPERIENCE */}
            <S.RowContent $flexColumn>
                <Experience />
            </S.RowContent>

            {/* WORKS */}
            <S.RowContent $width $flexColumn $workContnet  className='works_constent'>
                <Works />
            </S.RowContent>

            {/* WEB PORTFOLIO */}

            {/* WORKS */}
            <S.RowContent $flexColumn $flexCenter>
                <Portfolio />
            </S.RowContent>

        </S.IntroContent>
    )
}