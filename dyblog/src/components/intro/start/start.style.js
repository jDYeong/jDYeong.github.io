import styled from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include, bounceAni} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const UserBox = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`
export const UserPic = styled.div`
    position: relative;
    width: 23.3rem;
    height: 18.2rem;
    z-index: 2;
    div{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-style: solid;
        border-width: 1px 2px 2px 1px;
        overflow: hidden;
    }
    button{
        position: absolute;
        top: calc(100% - 10px);
        right: 40px;
        z-index: -1;
    }
    
    @media ${device.tablet} { 
        margin-bottom: 4.2rem;
    }
    @media ${device.mobile} {
        margin-bottom: 4.2rem;
    }
`

export const UserLogin = styled.div`
    position: absolute;
    top: 1rem;
    left: calc(50% - 10.7rem);
    width: 23.3rem;
    height: 18.2rem;
    z-index: 0;
    &>div{
        position: relative;
        width: 23.3rem;
        height: 18.2rem;
        z-index: 1;
        text-align: center;
        border-style: solid;
        border-width: 1px 2px 2px 1px;
        ${include.flexColumnCenter}
        @media ${device.tablet} { 
            border-style: solid;
            border-width: 1px 2px 2px 1px;
        }
        @media ${device.mobile} {
            border-style: solid;
            border-width: 1px 2px 2px 1px;
        }
        &+button{
            position: absolute;
            top: calc(100% - 20px);
            right: 20px;
            z-index: -1;
        }
        p{
            color: var(--light-color-white);
            font-size: 1.5rem;
            line-height: 1.2;
            font-weight: 800;
            margin-bottom: 20px;
            ${include.fontTitle}
        }
    }
`

export const LoginArea = styled.div``

export const InpWrap = styled.div`
    //max-width: calc(100% - 8rem);
    color: ${ props => props.$error ? `var(--light-color-red)` : `var(--light-color-white)`};
`
export const InpBox = styled.div`
    width: 100%;
    border-style: solid;
    border-width: 1px 2px 2px 1px;
    border-color: var(--light-color-white);
    margin: 0 auto 8px;
    padding-left: 4rem;
    box-sizing: border-box;
    position: relative;
    color: inherit;
    &:last-of-type{margin-bottom:0;}
`
export const Inp = styled.input`
    display: block;
    width: 100%;
    background-color: transparent;
    border-width: 0;
    font-size: 1.2rem;
    line-height: 2.4rem;
    color: inherit;
    &:focus{outline: none;}
    &+svg{
        width: 1.6rem;
        height: 1.6rem;
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
    }
`
export const TextButton = styled.button`
    font-size: 1.2rem;
    line-height: 1.2;
    text-decoration: underline;
    color: var(--light-color-white);
    margin-top: 10px;
`
export const IconBox = styled.div`
    color: var(--light-color-white);
    padding: 20px 0;
    animation: ${bounceAni} var(--ani-slow) infinite;
`

export const AboutMe = styled.div`
    width: 100%;
    height: 291px;
    background: url(${process.env.PUBLIC_URL}/assets/images/bg/intro_bg.jpg) no-repeat center bottom / cover;
    position: relative;
    overflow: hidden;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    &::before{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(125,60,152,.7) 0%, rgba(0,0,0,0) 100%);
        position: absolute;
        top: 0;
        left: 0;
    }
    
    @media ${device.tablet} { 
    
    }
    @media ${device.mobile} {
        height: 210px;
        border-width: 0;
    }
`
export const AboutMeTxt = styled.dl`
    padding: 2.4rem;
    position: relative;
    z-index: 1;
    
    @media ${device.tablet} { 
    
    }
    @media ${device.mobile} {
        padding: 1.6rem;
    }
`
export const AboutMeTit = styled.dt`
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.2;
    ${include.fontTitle}
    
    @media ${device.tablet} { 
    
    }
    @media ${device.mobile} {
        font-size: 2.4rem;
    }
`
export const AboutMeDesc = styled.dd`
    font-size: 1.6rem;
    line-height: 1.4;
    word-break: keep-all;
    margin-top: .8rem;
    
    @media ${device.tablet} { 
    
    }
    @media ${device.mobile} {
        font-size: 1.4rem;
        margin-top: .4rem;
    }
`