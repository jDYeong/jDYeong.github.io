import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrRight } from '../assets/images/icons/arr-right.svg';

export default function Nav(){

    const pages = [
        {id: 1, pageName:'INTRO', title:'intro'},
        // {id: 2, pageName:'GUEST BOOK', title:'guestbook'},
        // {id: 3, pageName:'NOTE', title:'note'},
        // {id: 4, pageName:'DIARY', title:'diary'},
        //{id: 5, pageName:'PRIVATE', title:'private'}
    ]

    //메뉴 이동 시 네비게이션 닫기
    const handleClose = (e) => {
        e.stopPropagation();
        const menuBtns = document.querySelectorAll('.main-btns .btn-type1');
        document.querySelector('nav').classList.remove('open');
        menuBtns.forEach(el => {
            el.classList.add('close');
            el.classList.remove('open');
        });
        
    };

    const listItems = pages.map((pageTit) =>
        <li key={pageTit.id.toString()} >
            <NavLink exact to={`/${pageTit.title === 'intro' ? '' : pageTit.title}`} onClick={handleClose}>
                {pageTit.pageName}
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