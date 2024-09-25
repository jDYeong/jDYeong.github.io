import styled from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';
import {Link} from 'react-router-dom';

export const PortfolioContent = styled.div`

    @media ${device.tablet} {}
    @media ${device.mobile} {}
`
export const PortfolioList = styled.ul`
    width: 100%;
    ${include.flex}
    flex-wrap: wrap;
    gap: 2rem 4rem;

    @media ${device.mobile} {
        gap: 1.2rem 0;
    }
`
export const PortfolioListItem = styled.li`
    flex: calc(50% - 2rem) 0 1;

    @media ${device.mobile} {
        flex: 1 0 0;
        min-width: 100%;
    }
`
export const PortfolioItemImg = styled.div`
    ${include.flexCenter}
    height: 10rem;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    position: relative;

    &::before{
        content: '';
        display: block;
        width: 3rem;
        height: 3rem;
        background: #fff;
        position: absolute;
        top: -1px;
        left: -1px;
    }
    &::after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-bottom: 2.2rem solid transparent;
        border-top: 2.2rem solid transparent;
        border-left: 2.2rem solid purple;
        border-right: 2.2rem solid transparent;
        position: absolute;
        top: .8rem;
        left: .8rem;
        transform: rotate(45deg);
    }
    img{
        max-width: 12rem;
        max-height: 3rem;
    }
    @media ${device.tablet} {}
    @media ${device.mobile} {}
`
export const PortfolioLink = styled.a`
    ${include.flex}
    align-items: center;
    justify-content: flex-end;
    width: 3.2rem;
    height: 3.2rem;
    padding: .6rem;
    border-radius: 3.2rem;
    border-width: 1px 2px 2px 1px;
    background-image: url(${process.env.PUBLIC_URL}/assets/images/icons/icon-outlink.svg);
    background-repeat: no-repeat;
    background-position: center left .5rem;
    border-style: solid;
    font-size: 0;
    line-height: 0;
    text-align: right;
    overflow: hidden;
    position: absolute;
    bottom: .8rem;
    right: .8rem;
    z-index: 1;
    transition: width var(--ani-fast);
    box-sizing: border-box;
    span{
        opacity: 0;
        flex-shrink: 0;
        transition: opacity var(--ani-fast);
    }
    &:hover{
        width: 11rem;
        font-size: 1.6rem;
        line-height: 1;
    span{opacity: 1;}
    }
`

export const PortfolioItem = styled.dl`
    margin-top: 1.6rem;

    @media ${device.tablet} {}
    @media ${device.mobile} {}
`
export const PortfolioLItemTit = styled.dt`
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 700;
    word-break: keep-all;

    @media ${device.tablet} {}
    @media ${device.mobile} {
        font-size: 1.8rem;
    }
`
export const PortfolioItemDesc = styled.dd`
    font-size: 1.6rem;
    line-height: 1.4;
    margin-top: .8rem;
    p{
        display: -webkit-box;
        white-space: pre-line;
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    span{
        display: block;
        padding-top: .4rem;
    }
    button{
        font: inherit;
        font-size: 1.2rem;
        line-height: inherit;
        text-decoration: underline;
        vertical-align: text-top;
    }
    @media ${device.tablet} {}
    @media ${device.mobile} {
        font-size: 1.4rem;
        margin-top: .2rem;
    }
`