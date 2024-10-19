import React, { useEffect, useState } from 'react';
import {Pc, Mobile, Tablet} from '../../../common/MediaQuery';
import { Link } from "react-router-dom";
import { ReactComponent as ImgNewPostButton } from '../../../assets/images/icons/icon-newpost.svg';

const NewPostBtn = () => {

    return (
        <Link to={{ pathname: "/private/admin_note", state: { editMode: false } }} className="btn-type1 btn_newpost" >
            <Pc>
                <ImgNewPostButton width={24} height={24} />
            </Pc>
            <Tablet>
                <ImgNewPostButton width={20} height={20} />
            </Tablet>
            <Mobile>
                <ImgNewPostButton width={20} height={20} />
            </Mobile>
        </Link>
    );
};

export default NewPostBtn;