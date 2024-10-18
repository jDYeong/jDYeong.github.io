import React from 'react';
import {Pc, Mobile, Tablet} from '../../../common/MediaQuery';
import { useHistory } from "react-router-dom";
import { ReactComponent as IconClose } from '../../../assets/images/icons/icon-close.svg';

const BtnClose = () => {
    const history = useHistory();
    return (
            <button type='button' className='btn-type1' onClick={() => history.goBack()}>
                <Pc><IconClose width={24} height={24} /></Pc>
                <Tablet><IconClose width={20} height={20} /></Tablet>
                <Mobile><IconClose width={20} height={20} /></Mobile>
            </button>
    );
};

export default BtnClose;