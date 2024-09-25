import React, { useState } from 'react';
import * as C from "../intro.style.js"
import * as S from "./works.style.js"
import WorksTitBtns from './worksTitBtns.js'
import WorksList from './worksList.js'
import {PortfolioData} from '../../common/webSIteData.js'


const Works = () => {

    const [expanded, setExpanded] = useState(0);

    return (
        <S.WorksContent className='works_box'>
            <S.WorksTitWarp className='works_tit'>
                <C.IntroTitle $margin={false}>WORKS</C.IntroTitle>
                <WorksTitBtns />
            </S.WorksTitWarp>

            <S.WorksDescWarp className='works_desc'>
                <div>
                    {PortfolioData.map((e, i) => (
                        <WorksList
                            key={i}
                            id={i}
                            title={e.title}
                            contri={e.contri}
                            content={e.content}
                            expanded={expanded}
                            setExpanded={setExpanded}
                        />
                    ))}
                </div>
            </S.WorksDescWarp>
        </S.WorksContent>
    );
};

export default Works;
