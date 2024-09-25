import styled from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const WorksContent = styled.div`
    width: calc(100% - 14rem);
    margin: 0 auto;

    @media ${device.tablet} {}
    @media ${device.mobile} {width: calc(100% - 4rem);}
`
export const WorksScrollBox = styled.div`
    overflow-y: auto;

    @media ${device.tablet} {}
    @media ${device.mobile} {}
`

export const WorksTitWarp = styled.div`
    ${include.flex}
    justify-content: space-between;
    border-style: solid;
    border-width: 1px 2px 1px 1px;
    padding: .4rem 2rem;
    
    @media ${device.tablet} {}
    @media ${device.mobile} {padding: .4rem 1rem;}
`
export const WorksBtnBox = styled.div`
    ${include.flexCenter}
    gap: 0 .6rem;

    button{font-size: 12px;}
    @media ${device.tablet} {}
    @media ${device.mobile} {}
`

export const WorksDescWarp = styled.div`
    border-style: solid;
    border-width: 0 2px 2px 1px;
    &>div{
        overflow-y: auto;
        max-height: 26rem;
    }
    
    @media ${device.tablet} {}
    @media ${device.mobile} {}
`

export const WorksListItem = styled.dl`
    &.active{
        border-bottom: 1px solid;
        &:last-of-type{border-bottom-width: 0;}
    }
`

export const WorksTit = styled.dt`
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 700;
    padding: .6rem 1.2rem;
    position: relative;
    word-break: keep-all;
    button{
        color: inherit;
        font: inherit;
        width: 100%;
        text-align: left;
        position: relative;
        z-index: 1;
        word-break: keep-all;
        padding-right: 2rem;
    }
    span{
        ${include.flexCenter}
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        svg{transform: rotate(90deg)}
    }

    @media ${device.tablet} {}
    @media ${device.mobile} {
        font-size: 1.6rem;
    }
`

export const WorksDesc = styled.dd`
    //height: 0;
    overflow: hidden;
    div{
        padding: .6rem 1.2rem 1.2rem;
        span{
            display: block;
            font-size: 1.4rem;
            line-height: 1.4;
            font-weight: 500;
            margin-bottom: .4rem;
        }
        p{
            font-size: 1.4rem;
            line-height: 1.4;
            word-break: keep-all;
            white-space: pre-line;
        }
    }

    @media ${device.tablet} {}
    @media ${device.mobile} {
        div{padding: .6rem;}
    }
`