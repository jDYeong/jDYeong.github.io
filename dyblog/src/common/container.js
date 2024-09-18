import React, { useEffect, useState } from 'react';
import { Pc, Mobile, Tablet } from './MediaQuery';
import Header from "./header";
import Main from "./main";
import MainButtons from './mainButtons';
import Footer from './footer';

export default function Container(){

    const [isThema, setThema] = useState();
    if( isThema  === null ){
        setThema('lightMode')
    }

    useEffect(() => {
        const Thema = JSON.parse(localStorage.getItem("thema"));
        setThema(Thema)
    }, []);

    return(
        <div className={`bg ${isThema}`}>
            <div className="container">
                <Pc><Header /></Pc>
                <Mobile><Header mediaQuery={true} /></Mobile>
                <Tablet><Header mediaQuery={true} /></Tablet>
                <Main />
                <Pc><MainButtons /></Pc>
                <Mobile><Footer /></Mobile>
                <Tablet><Footer /></Tablet>
            </div>
        </div>
    )
}