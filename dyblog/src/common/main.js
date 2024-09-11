import React from 'react';
import { Route } from "react-router-dom";
import Intro from '../components/intro';
import Note from '../components/note';
import Diary from '../components/diary';
import Guestbook from '../components/guestbook';
import Private from '../components/private';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

export default function Main(){

    return(
        <main>
            <Switch>
                <Route exact path="/"><Intro /></Route>
                <Route path="/guestbook"><Guestbook /></Route>
                <Route path="/note"><Note /></Route>
                <Route path="/diary"><Diary /></Route>
                <Route path="/private"><Private /></Route>
                <Route path="/">잘못 입력</Route>
            </Switch>
        </main>
    )
}