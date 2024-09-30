import React, { useEffect, useState } from 'react';
import { Pc, Mobile, Tablet } from './MediaQuery';
import Header from "./header";
import Main from "./main";
import MainButtons from './mainButtons';
import Footer from './footer';
import Contact from './contact';

export default function Container({sendLoginData, loginState}){
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
                <Pc><Header loginState={loginState} /></Pc>
                <Mobile><Header loginState={loginState} mediaQuery={true} /></Mobile>
                <Tablet><Header loginState={loginState} mediaQuery={true} /></Tablet>
                <Main  sendLoginData={sendLoginData}/>
                <Pc><MainButtons /></Pc>
                <Contact />
            </div>
            <Mobile><Footer /></Mobile>
            <Tablet><Footer /></Tablet>
        </div>
    )
}