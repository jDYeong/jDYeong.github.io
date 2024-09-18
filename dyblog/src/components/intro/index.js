import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as S from "./intro.style.js"
import Start from "./start/start.js"
import Skills from "./skills/skills.js"


export default function Intro(){

    return(
        <S.IntroContent>
            {/* about me */}
            <S.RowContent>
                <Start />
            </S.RowContent>

            {/* skills */}
            <S.RowContent>
                <Skills />
            </S.RowContent>

            {/* EXPERIENCE */}
            {/* WORKS */}
            {/* WEB PORTFOLIO */}

        </S.IntroContent>
    )
}