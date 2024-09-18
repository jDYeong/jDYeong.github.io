import React, { useEffect } from 'react';
import { Pc, Mobile, Tablet } from './MediaQuery';
import Nav from "./nav";
import Footer from "./footer";
import MainButtons from "./mainButtons";

export default function Header(prop){

    //태블릿,모바일 헤더 스크롤 이벤트
    const handleScroll = () => {
        let headerTop = document.querySelector('.container').offsetTop + 2;
        let mediaNotPc = document.querySelector('header');

        window.scrollY > headerTop
            ? mediaNotPc.style.transform=`translateY(${window.scrollY - headerTop}px)`
            : mediaNotPc.style.transform=`translateY(0)`;

        //휠 이벤트
        window.onwheel = (e) => {
            e.deltaY > 0
                ? mediaNotPc.classList.add('down')
                : mediaNotPc.classList.remove('down');
        }
    }

    useEffect(() => {
        if( prop.mediaQuery ){

            const timer = setInterval(() => {
                window.addEventListener("scroll", handleScroll);
            }, 100);
            return () => {
                clearInterval(timer);
                window.addEventListener("scroll", handleScroll);
            };
            
        }
    }, []);

    return(
        <header className={ prop.mediaQuery ? 'mediaNotPc' : 'mediaPc' }>
            <div className="sticky">
                <h1 className="title">
                    <p>안녕하세요 정다영입니다!</p>
                    <span></span>
                    <div>JDYeong <br />Blog</div>
                </h1>
                <Pc><Nav /></Pc>
            </div>
            <Mobile><Nav /></Mobile>
            <Tablet><Nav /></Tablet>

            <Pc><Footer /></Pc>

            <Tablet><MainButtons /></Tablet>
            <Mobile><MainButtons /></Mobile>
        </header>
    )
}