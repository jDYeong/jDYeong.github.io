import React from 'react';
import * as S from "./admin_components.style.js"

const AdminHeader = (props) => {
    return (
        <S.AdminHeader>
            <S.SubTit>Admin</S.SubTit>
            <S.Tit>{props.title}</S.Tit>
        </S.AdminHeader>
    );
};

export default AdminHeader;