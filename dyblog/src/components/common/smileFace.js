import React from 'react';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import { ReactComponent as ModdHappy } from '../../assets/images/icons/mood-happy.svg';
import * as S from "../intro/skills/skills.style.js"

const SmileFace = () => {
    return (
        <S.SmileFace>
            <Pc><ModdHappy width={60} height={60} /></Pc>
            <Tablet><ModdHappy width={60} height={60} /></Tablet>
            <Mobile><ModdHappy width={40} height={40} /></Mobile>
        </S.SmileFace>
    );
};

export default SmileFace;