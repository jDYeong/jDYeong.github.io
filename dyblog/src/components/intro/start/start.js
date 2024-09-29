import React, { useState } from 'react';
import * as S from "./start.style.js"
import UserBoxTag from '../../common/bookmark.js'
import LoginArea from "./loginArea.js"
import LogoutArea from "./logoutArea.js"
import AboutMe from "./aboutme.js"


const Start = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const updateLoginResult = (result) => {
        setIsLoggedIn(result);
    };

    return (
        <div>
            <S.UserBox>
                <S.UserPic className='user_box pic'>
                    <div></div>
                    <UserBoxTag />
                </S.UserPic>

                <S.UserLogin className='user_box login'>

                    {isLoggedIn ? <LoginArea updateLoginResult={updateLoginResult} /> : <LogoutArea updateLoginResult={updateLoginResult} />}

                    <UserBoxTag />
                </S.UserLogin>
            </S.UserBox>

            <AboutMe />
        </div>
    );
};

export default Start;