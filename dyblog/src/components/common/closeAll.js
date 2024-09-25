import React from 'react';
import gsap from 'gsap';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import { ReactComponent as IconOpenClose } from '../../assets/images/icons/works_close_all.svg';

const closeAll = () => {
    const clickAllClose = (e) => {
        let descList = document.querySelectorAll('.works_desc dl');
        descList.forEach(el => {
            let dt = el.children[0];
            let dd = el.children[1];
            
            gsap.to(dd, {
                height: 0
            });
    
            //화살표 회전
            gsap.to(dt.children[1], {
                rotate: 0,
                duration: 0.5
            })
            el.classList.remove('active')
        });
    }

    return (
        <button type='button' className="btn-type1" onClick={clickAllClose}>
            <Pc><IconOpenClose width={25} height={25} /></Pc>
            <Tablet><IconOpenClose width={25} height={25} /></Tablet>
            <Mobile><IconOpenClose width={16} height={16} /></Mobile>
        </button>
    );
};

export default closeAll;