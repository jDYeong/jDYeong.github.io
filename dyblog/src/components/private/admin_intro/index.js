import React from 'react';
import * as C from "../index.style.js"
import * as S from "./index.style.js"
import * as SC from "../admin_common/admin_common.style.js"
import BtnClose from '../../../components/common/btnClose'
import ThemeButtonBtn from '../../../components/common/themaButton'

const AdminIntro = () => {
    return (
        <SC.AdminContent className='admin_content'>

            <SC.SubHeader className='main-btns'>
                <ThemeButtonBtn />
                <BtnClose />
            </SC.SubHeader>

            <S.AdminIntroContent>
                <SC.WriteContent>
                    작성화면
                </SC.WriteContent>
            </S.AdminIntroContent>
        </SC.AdminContent>
    );
};

export default AdminIntro;