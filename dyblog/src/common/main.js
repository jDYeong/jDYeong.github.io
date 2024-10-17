import React from 'react';
import { Route } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';
import Intro from '../components/intro';
import Note from '../components/note';
import Diary from '../components/diary';
import Guestbook from '../components/guestbook';
import Private from '../components/private';
import Err from '../components/err';
import AdminIntro from '../components/private/admin_intro';
import AdminGuestbook from '../components/private/admin_guestbook';
import AdminNote from '../components/private/admin_note';
import AdminDiary from '../components/private/admin_diary';

export default function Main({sendLoginData}){
    const location = useLocation();

    const getRootClassName = () => {
        if (location.pathname.startsWith('/private') && location.pathname !== '/private') {
            return 'sub-page-main';
        }
        return '';
    };
    return(
        <main className={getRootClassName()}>
            <Switch>
                <Route exact path="/"><Intro sendLoginData={sendLoginData} /></Route>
                <Route path="/guestbook"><Guestbook /></Route>
                <Route path="/note"><Note /></Route>
                <Route path="/diary"><Diary /></Route>
                <Route exact path="/private"><Private /></Route>
                
                {/* admin */}
                <Route path="/private/admin_intro"><AdminIntro /></Route>
                <Route path="/private/admin_guestbook"><AdminGuestbook /></Route>
                <Route path="/private/admin_note"><AdminNote /></Route>
                <Route path="/private/admin_diary"><AdminDiary /></Route>
                
                {/* 에러 페이지 */}
                <Route path="/"><Err /></Route>
            </Switch>
        </main>
    )
}