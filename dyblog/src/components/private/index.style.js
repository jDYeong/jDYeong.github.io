import styled, { css } from 'styled-components'
import '../../assets/scss/setting/_var.scss';
import {include} from '../../common/mixin.style';
import { device } from '../../common/MediaQuery';

export const PrivateContent = styled.div`
    display: block;
    padding: 12rem 7rem;
    
    @media ${device.tablet}{}
    @media ${device.mobile}{}
`
export const PrivateTit = styled.h1`
    font-size: 3.8rem;
    font-weight: 700;
    ${include.fontTitle}
    
    @media ${device.tablet}{}
    @media ${device.mobile}{}
`
export const PrivateList = styled.ul`
    margin-top: 3rem;
    padding-left: 8rem;
    
    @media ${device.tablet}{}
    @media ${device.mobile}{}
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

    @media ${device.tablet}{}
    @media ${device.mobile}{}
`
