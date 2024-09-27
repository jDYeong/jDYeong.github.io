import styled from 'styled-components'
import '../../assets/scss/setting/_var.scss';
import {include} from '../../common/mixin.style';
import { device } from '../../common/MediaQuery';

export const ErrContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    @media ${device.mobile} { 
        
    }
`
export const ErrTit = styled.h1`
    ${include.fontTitle}
    font-size: 3.6rem;
    line-height: 1;
    
    @media ${device.mobile} { 
        
    }
`
export const ErrTxt = styled.p`
    font-size: 1.6rem;
    line-height: 1.2;
    padding-top: .6rem;
    
    @media ${device.mobile} { 
        
    }
`
export const ErrBackBtn = styled.button`
    ${include.borderStyle}
    font-size: 1.4rem;
    line-height: 1;
    padding: .8rem 3rem;
    border-radius: 5rem;
    font-weight: 700;
    margin-top: 2.4rem;
    
    @media ${device.mobile} { 
        
    }
`