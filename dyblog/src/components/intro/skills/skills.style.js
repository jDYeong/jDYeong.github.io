import styled from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include, bounceAni} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const SkillsContent = styled.div`
    width: auto;
    padding: .8rem 1.8rem .6rem;
    border-radius: 1.5rem;
    ${include.flexColumnCenter}
    &>div{
        width: 4rem;
        height: 0;
        overflow: hidden;
        transition: var(--ani-fast);
        margin: 0 auto;
        text-align: center;
        flex-shrink: 0;
        img{
            width: 100%;
            height: auto;
        }
    }

    @media ${device.tablet} { 
    }
    @media ${device.mobile} { 
        &>div{
            width: 2.4rem;
        }
    }
`

export const SkillsName = styled.span`
    font-size: 1.2rem;
    line-height: 1.2;
    color: var(--light-color-white);
    ${include.fontTitle}

    @media ${device.tablet} { 

    }
    @media ${device.mobile} { 
        font-size: 1rem;
    }
`

export const SmileFace = styled.span`
    margin: 1.2rem auto 0;
    animation: ${bounceAni} var(--ani-slow) infinite;

    @media ${device.tablet} { 

    }
    @media ${device.mobile} { 
        margin-top: .4rem;
    }
`