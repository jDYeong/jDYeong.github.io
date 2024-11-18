import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrRight } from '../assets/images/icons/arr-right.svg';
import { ReactComponent as Lock } from '../assets/images/icons/icon-lock.svg';
import { ReactComponent as Unlock } from '../assets/images/icons/icon-unlock.svg';

export default function Nav(loginState){

    const pages = [
        {id: 1, pageName:'INTRO', title:'intro'},
        {id: 2, pageName:'GUEST BOOK', title:'guestbook'},
        {id: 3, pageName:'NOTE', title:'note'},
        //{id: 4, pageName:'DIARY', title:'diary'},
        {id: 5, pageName:'PRIVATE', title:'private'}
    ]

    //메뉴 이동 시 네비게이션 닫기
    const handleClose = (pageTitTitle, e) => {
        e.stopPropagation();
        const menuBtns = document.querySelectorAll('.main-btns .btn-type1');
        document.querySelector('nav').classList.remove('open');
        menuBtns.forEach(el => {
            el.classList.add('close');
            el.classList.remove('open');
        });

        //로그아웃 상태인 경우 이동 금지
        if( pageTitTitle === 'private' && !loginState.loginState){
            e.preventDefault();
        }
    };

    const listItems = pages.map((pageTit) =>
        <li key={pageTit.id.toString()} className={ pageTit.title === 'private' ? 'private' : '' }>
            <NavLink exact to={`/${pageTit.title === 'intro' ? '' : pageTit.title}`} onClick={(e) => { handleClose(pageTit.title, e) }}>
                {pageTit.pageName}
                {pageTit.title === 'private' ? loginState.loginState ? <Unlock /> : <Lock /> : ''}
                <ArrRight />
            </NavLink>
        </li>
    );

    return(
        <nav>
            <ul>
                {listItems}
            </ul>
        </nav>
    )
}