import React from 'react';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import { ReactComponent as LinkIntro } from '../../components/images/icons/icon-home.svg';

const LinkIntroBtn = () => {
    return (
        <button type='button' className='btn-type1'>
            <Pc><LinkIntro width={24} height={24} /></Pc>
            <Tablet><LinkIntro width={20} height={20} /></Tablet>
            <Mobile><LinkIntro width={20} height={20} /></Mobile>
        </button>
    );
};

export default LinkIntroBtn;