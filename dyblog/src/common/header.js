import React from 'react';
import Nav from "./nav";
import Footer from "./footer";

export default function Header(){

    return(
        <header>
            <div className="sticky">
                <h1 className="title">
                    <p>안녕하세요 정다영입니다!</p>
                    <span></span>
                    <div>JDYeong <br />Blog</div>
                </h1>
                <Nav />
            </div>
            <Footer />
        </header>
    )
}