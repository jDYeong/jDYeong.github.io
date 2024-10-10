import React from 'react';
import { Link } from "react-router-dom";
import * as S from "./index.style.js"
import { ReactComponent as IconListArr } from '../../assets/images/icons/arr-list.svg';

export default function Private(){

    return(
        <S.PrivateContent className="private_content">
            <S.PrivateTit>Admin</S.PrivateTit>
            <S.PrivateList>
                <S.PrivateListItem>
                    <IconListArr />
                    <Link to="/private/admin_intro">Intro page</Link>
                </S.PrivateListItem>
                <S.PrivateListItem>
                    <IconListArr />
                    <Link to="/private/admin_guestbook">Guestbook page</Link>
                </S.PrivateListItem>
                <S.PrivateListItem>
                    <IconListArr />
                    <Link to="/private/admin_note">Note page</Link>
                </S.PrivateListItem>
                <S.PrivateListItem>
                    <IconListArr />
                    <Link to="/private/admin_diary">Diary page</Link>
                </S.PrivateListItem>
                </S.PrivateList>
        </S.PrivateContent>
    )
}