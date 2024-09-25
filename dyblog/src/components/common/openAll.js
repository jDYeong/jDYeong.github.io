import React from 'react';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import * as S from "../intro/skills/skills.style.js"
import { ReactComponent as IconOpenAll } from '../../assets/images/icons/works_open_all.svg';

const openAll = () => {

    const clickAllClose = () => {
        console.log('모두닫기')
    }

    return (
        <button type='button' className="btn-type1" onClick={clickAllClose}>
            <Pc><IconOpenAll width={25} height={25} /></Pc>
            <Tablet><IconOpenAll width={25} height={25} /></Tablet>
            <Mobile><IconOpenAll width={16} height={16} /></Mobile>
        </button>
    );
};

export default openAll;