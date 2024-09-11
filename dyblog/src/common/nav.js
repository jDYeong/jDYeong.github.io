import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrRight } from '../components/images/icons/arr-right.svg';

export default function Nav(){

    const pages = [
        {id: 1, pageName:'INTRO', title:'intro'},
        {id: 2, pageName:'GUEST BOOK', title:'guestbook'},
        {id: 3, pageName:'NOTE', title:'note'},
        {id: 4, pageName:'DIARY', title:'diary'},
        {id: 5, pageName:'PRIVATE', title:'private'}
    ]

    const listItems = pages.map((pageTit) =>
        <li key={pageTit.id.toString()} >
            <NavLink exact to={`/${pageTit.title === 'intro' ? '' : pageTit.title}`}>
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