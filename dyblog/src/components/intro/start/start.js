import React from 'react';
import * as S from "./start.style.js"
import UserBoxTag from '../../common/bookmark.js'
import LoginArea from "./loginArea.js"
import LogoutArea from "./logoutArea.js"
import AboutMe from "./aboutme.js"


const Start = () => {
    return (
        <div>
            <S.UserBox>
                <S.UserPic className='user_box pic'>
                    <div></div>
                    <UserBoxTag />
                </S.UserPic>

                <S.UserLogin className='user_box login'>
                    
                    {/* 로그아웃 상태 */}
                    <LogoutArea />

                    {/* 로그인 상태
                    <LoginArea /> */}
                    
                    <UserBoxTag />
                </S.UserLogin>
            </S.UserBox>

            <AboutMe />
        </div>
    );
};

export default Start;