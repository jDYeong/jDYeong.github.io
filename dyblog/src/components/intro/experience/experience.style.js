import styled from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const ExperieceTit = styled.strong`
    font-size: 2.4rem;
    line-height: 1.4;
    font-weight: 800;
    margin-bottom: 1.5rem;
    
    @media ${device.mobile} { 
        font-size: 1.8rem;
        margin-bottom: .8rem;
    }
`
export const ExperieceRow = styled.ul`
    margin-bottom: 3.2rem;
    &:last-of-type{margin-bottom: 0;}
    
    @media ${device.mobile} { 
        margin-bottom: 1.6rem;
    }
`

export const ExperieceCol = styled.li`
    ${include.flexCenter}
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: transparent;
    transition: var(--ani-fast);
    margin-bottom: .8rem;
    &:last-of-type{margin-bottom: 0;}
    
    @media ${device.mobile} { 
        ${include.flexColumn}
        align-items: flex-start;
        margin-bottom: .4rem;
    }
`
export const ExperieceDesc = styled.p`
    ${include.flexCenter}
    gap: 0 .4rem;
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 700;
    
    @media ${device.mobile} { 
        font-size: 1.6rem;
        line-height: 1.9rem;
    }
`

export const ExperieceDate = styled.span`
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding-left: 3rem;
    b{
        color: var(--light-color-purple);
        font-weight: 500;
        padding-right: 0.5rem;
    }
    
    @media ${device.mobile} { 
        font-size: 1.4rem;
        line-height: 1.7rem;
    }
`