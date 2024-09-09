import React, { useState } from 'react';
import { Mobile, Tablet } from './MediaQuery';
import Header from "./header";
import Main from "./main";
import MainButtons from './mainButtons';
import Footer from './footer';

export default function Container(){

    //테마 체크
    const [theme, seTheme] = useState(window.matchMedia('(prefers-color-scheme: light)'));

    return(
        <div className={`bg ${theme.matches ? 'lightMode' : 'darkMode'}`}>
            <div className="container">
                <Header />
                <Main />
                <MainButtons />
                <Mobile><Footer /></Mobile>
                <Tablet><Footer /></Tablet>
            </div>
        </div>
    )
}