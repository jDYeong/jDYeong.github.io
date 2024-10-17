import styled, { css } from 'styled-components'
import '../../assets/scss/setting/_var.scss';
import {include} from '../../common/mixin.style';
import { device } from '../../common/MediaQuery';

export const PrivateContent = styled.div`
    display: block;
    padding: 12rem 7rem;
    
    @media ${device.tablet}{padding: 6rem 4rem;}
    @media ${device.mobile}{padding: 6rem 2rem;}
`
export const PrivateTit = styled.h1`
    font-size: 3.8rem;
    font-weight: 700;
    ${include.fontTitle}
    
    @media ${device.tablet}{}
    @media ${device.mobile}{font-size: 3rem;}
`
export const PrivateList = styled.ul`
    margin-top: 3rem;
    padding-left: 8rem;
    
    @media ${device.tablet}{padding-left: 6rem;}
    @media ${device.mobile}{padding-left: 3rem;}
`
export const PrivateListItem = styled.li`
    ${include.flex}
    align-items: center;
    gap: 0 .8rem;
    margin-top: 1.6rem;
    &:first-of-type{margin-top:0;}
    a{
        display: block;
        font-size: 1.8rem;
        line-height: 1.2;
        padding: .1rem 0;
    }

    @media ${device.tablet}{
        margin-top: 1.2rem;
        a{
            font-size: 1.6rem;
        }
    }
    @media ${device.mobile}{
        margin-top: 1.2rem;
        a{
            font-size: 1.6rem;
        }
    }
`