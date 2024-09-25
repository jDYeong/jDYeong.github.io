import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as S from "./works.style.js"
import MoreArrs from "./worksArr.js"
//import { ReactComponent as MoreArr } from "../../../assets/images/icons/arr-right.svg"
//import WorksListItem from "./worksListItem.js"


const WorksList = ({ title, id, contri, content, expanded, setExpanded }) => {
    const isOpen = id === expanded;
    const ref = useRef();

    useEffect(() => {
        //아코디언
        gsap.to(ref.current.children[1], {
            height: isOpen ? "auto" : 0
        });

        //화살표 회전
        gsap.to(ref.current.children[0].children[1], {
            rotate: isOpen ? 180 : 0,
            duration: 0.5
        });

        let item = ref.current.children[1].closest('dl');
        isOpen ? item.classList.add('active') : item.classList.remove('active');

    }, [isOpen]);

    return (
        <S.WorksListItem ref={ref}>
            <S.WorksTit>
                <button type='button' onClick={() => setExpanded(id === expanded ? -1 : id)}>{title}</button>
                <MoreArrs />
            </S.WorksTit>
            <S.WorksDesc>
                <div>
                    <span>기여도 : {contri}</span>
                    <p dangerouslySetInnerHTML={{ __html: content }} ></p>
                </div>
            </S.WorksDesc>
        </S.WorksListItem>
    );
};

export default WorksList;