import React from 'react';
import { ReactComponent as ImgBookMark } from '../../../assets/images/icons/intro_userTag.svg';

const UserBoxTag = () => {

    const UserBoxTagClick = (e) => {
        let userBoxAll = document.querySelectorAll('.user_box');
        for (let i = 0; i < userBoxAll.length; i++) {
            userBoxAll[i].style.zIndex=0;
        }
        e.target.closest('.user_box').style.zIndex=1;
    }

    return (
        <button type='button' onClick={UserBoxTagClick}>
            <ImgBookMark />
        </button>
    );
};

export default UserBoxTag;