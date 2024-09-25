import React from 'react';
import * as S from "./works.style.js"
import OpenAll from "../../common/openAll.js"
import CloseAll from "../../common/closeAll.js"

const worksTitBtns = () => {

    return (
        <S.WorksBtnBox>
            {/* <OpenAll /> */}
            <CloseAll />
        </S.WorksBtnBox>
    );
};

export default worksTitBtns;