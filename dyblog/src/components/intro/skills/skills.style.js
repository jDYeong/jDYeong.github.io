import styled from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const SkillsContent = styled.div`
    width: auto;
    padding: .6rem 1.8rem;
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
    }

    @media ${device.tablet} { 
    }
    @media ${device.mobile} { 
    }
`

export const SkillsName = styled.span`
    font-size: 1.6rem;
    line-height: 1.2;
    color: var(--light-color-white);
`