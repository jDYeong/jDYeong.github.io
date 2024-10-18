import React from 'react';
import * as S from "./works.style.js"
import OpenAll from "../../common/buttons/openAll.js"
import CloseAll from "../../common/buttons/closeAll.js"

const worksTitBtns = () => {

    return (
        <S.WorksBtnBox>
            {/* <OpenAll /> */}
            <CloseAll />
        </S.WorksBtnBox>
    );
};

export default worksTitBtns;