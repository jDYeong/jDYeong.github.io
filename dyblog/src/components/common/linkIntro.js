import React from 'react';
import {Pc, Mobile, Tablet} from '../../common/MediaQuery';
import { useHistory } from "react-router-dom";
import { ReactComponent as LinkIntro } from '../../assets/images/icons/icon-home.svg';

const LinkIntroBtn = () => {
    const history = useHistory();
    return (
            <button type='button' className='btn-type1' onClick={() => history.push('/')}>
                <Pc><LinkIntro width={24} height={24} /></Pc>
                <Tablet><LinkIntro width={20} height={20} /></Tablet>
                <Mobile><LinkIntro width={20} height={20} /></Mobile>
            </button>
    );
};

export default LinkIntroBtn;