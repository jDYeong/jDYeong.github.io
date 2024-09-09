import React from 'react';
import { useMediaQuery } from "react-responsive"

const Pc = ({children}) => {
    const isTablet = useMediaQuery({minWidth: 961 });
    return isTablet ? children : null;
}

const Tablet = ({children}) => {
    const isTablet = useMediaQuery({ minWidth: 721, maxWidth: 960 });
    return isTablet ? children : null;
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({ maxWidth: 720 });
    return isMobile ? children : null;
};

export {Pc, Tablet, Mobile};