import React from 'react';
import {Pc, Mobile, Tablet} from '../../../common/MediaQuery';
import { useHistory } from "react-router-dom";
import { ReactComponent as IconClose } from '../../../assets/images/icons/icon-close.svg';
import { Link } from 'react-router-dom';

const BtnClose = () => {
    const history = useHistory();
    
    let pathname = history.location.pathname;
    let name = pathname.split('/');

    return (
            <Link to={`/${name[1]}`} className='btn-type1'>
            {/* <button type='button' className='btn-type1' onClick={() => history.goBack()}> */}
                <Pc><IconClose width={24} height={24} /></Pc>
                <Tablet><IconClose width={20} height={20} /></Tablet>
                <Mobile><IconClose width={20} height={20} /></Mobile>
            </Link>
    );
};

export default BtnClose;