import React, { useEffect, useState } from 'react';
import * as S from "./start.style.js"
import UserBoxTag from '../../common/buttons/bookmark.js'
import LoginArea from "./loginArea.js"
import LogoutArea from "./logoutArea.js"
import AboutMe from "./aboutme.js"


const Start = ({sendLoginData}) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('logged'));
        if (token) {
            setIsLoggedIn(token);
        }
    }, []);
    
    const updateLoginResult = (result) => {
        localStorage.setItem('logged', JSON.stringify(result));
        setIsLoggedIn(result);
        sendLoginData(result);//app.js로 값 전달
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