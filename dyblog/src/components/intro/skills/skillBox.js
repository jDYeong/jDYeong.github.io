import React from 'react';
import * as S from "./skills.style.js"

const skillBox = (props) => {
    return (
        <S.SkillsContent className='skill_box'>
            <div><img src={process.env.PUBLIC_URL + `/assets/images/icons/icon-skill-${props.$name}.svg`} alt="html" /></div>
            <S.SkillsName>{props.$name.toUpperCase()}</S.SkillsName>
        </S.SkillsContent>
    );
};

export default skillBox;