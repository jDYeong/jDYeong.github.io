import React, { useEffect } from 'react';
import { Pc, Mobile, Tablet } from './MediaQuery';
import { useLocation } from 'react-router-dom';
import Nav from "./nav";
import Footer from "./footer";
import MainButtons from "./mainButtons";

export default function Header({ mediaQuery, loginState }){
    const location = useLocation();

    //태블릿,모바일 헤더 스크롤 이벤트
    const handleScroll = (e) => {
        let headerTop = document.querySelector('.container').offsetTop + 2;
        let mediaNotPc = document.querySelector('header');

        let lastKnownScrollPosition = 0;
        let deltaY = 0;

        window.scrollY > headerTop
            ? mediaNotPc.classList.add('fixed')
            : mediaNotPc.classList.remove('fixed')

        let ticking = false;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                deltaY = window.scrollY - lastKnownScrollPosition;
                lastKnownScrollPosition = window.scrollY;
                ticking = false;

                deltaY > 0
                ? mediaNotPc.classList.add('down')
                : mediaNotPc.classList.remove('down');
            });
            ticking = true;
        }
    }

    const getRootClassName = () => {
        if (location.pathname.startsWith('/private') && location.pathname !== '/private') {
            return 'sub-page-header';
        }
        if (location.pathname.startsWith('/note/detail/') && location.pathname !== `/note/detail/`) {
            return 'sub-page-header';
        }
        return '';
    };

    useEffect(() => {
        if( mediaQuery ){

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
        <header className={ `${mediaQuery ? 'mediaNotPc' : 'mediaPc'} ${getRootClassName()}` }>
            <div className="sticky">
                <h1 className="title">
                    <p>안녕하세요 정다영입니다!</p>
                    <span></span>
                    <div>JDYeong <br />Blog</div>
                </h1>
                <Pc><Nav loginState={loginState} /></Pc>
            </div>
            <Mobile><Nav loginState={loginState} /></Mobile>
            <Tablet><Nav loginState={loginState} /></Tablet>

            <Pc><Footer /></Pc>

            <Tablet><MainButtons /></Tablet>
            <Mobile><MainButtons /></Mobile>
        </header>
    )
}