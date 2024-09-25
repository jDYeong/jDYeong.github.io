import React from 'react';
import {Pc, Mobile, Tablet} from '../../../common/MediaQuery';
import { ReactComponent as MoreArr } from '../../../assets/images/icons/arr-right.svg';

const openAll = () => {

    return (
        <span>
            <Pc><MoreArr width={24} height={24} /></Pc>
            <Tablet><MoreArr width={24} height={24} /></Tablet>
            <Mobile><MoreArr width={16} height={16} /></Mobile>
        </span>
    );
};

export default openAll;