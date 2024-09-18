import React from 'react';
import { useMediaQuery } from "react-responsive"

const Pc = ({children}) => {
    const isPc = useMediaQuery({minWidth: 961 });
    return isPc ? children : null;
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

/* styled components */
const size = {
    desktop: '961px',
    tabletMax: '960px',
    tabletMin: '721px',
    mobile: '720px',
}

export const device = {
    desktop: `(min-width: ${size.desktop})`,
    tablet: `(min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
    mobile: `(max-width: ${size.mobile})`,
};