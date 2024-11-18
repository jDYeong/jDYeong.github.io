import styled, { css } from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const GBitem = styled.li`
    list-style: none;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    border-color: black;
    padding: 1.8rem;
    box-sizing: border-box;
    
    @media ${device.tablet}{}
    @media ${device.mobile}{
        padding: 1.2rem;
    }
`
export const GBtxtbox = styled.div`
    margin-bottom: 1.2rem;
    .textarea{
        border : 1px solid;
        padding: 1rem;
        font-size: 1.6rem;
        line-height: 2.2rem;
    }
    p{
        padding: 1.2rem;
        font-size: 1.6rem;
        line-height: 2.2rem;
    }
    
    ${(props) =>
        props.$error
        ? css`
            .textarea{
                border-color: var(--light-color-red) !important;
                &::placeholder{color: var(--light-color-red)  !important;}
            }
        `
        : css``}
    
    @media ${device.tablet}{}
    @media ${device.mobile}{
        .textarea{font-size: 1.4rem;}
        p{font-size: 1.4rem;}
    }
`
export const textbox = styled.p`
    ${include.flexCenter}
    justify-content: flex-start;
    gap: .4rem;
    padding: 1.2rem;
    font-size: 1.6rem;
    line-height: 2.2rem;

    @media ${device.tablet}{}
    @media ${device.mobile}{}
`
export const idbox = styled.p`
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--light-color-purple);
    
    @media ${device.tablet}{}
    @media ${device.mobile}{width: 100%;}
`
export const datebox = styled.p`
    font-size: 1.2rem;
    line-height: 1.4rem;
    
    @media ${device.tablet}{}
    @media ${device.mobile}{}
`
export const GBinpbox = styled.div`
    position: relative;
    ${include.flex}
    
    @media ${device.tablet}{}
    @media ${device.mobile}{
        ${include.flexColumn}
    }
`
export const Txtleft = styled.div`
    ${include.flexCenter}
    gap: .8rem;
    input{
        width: 17rem;
        font-size: 1.4rem;
        line-height: 2rem;
        padding: .2rem 1rem;
        box-sizing: border-box;
    }
    
    ${(props) =>
        props.$error
        ? css`
            input[name=pw]{
                border-color: var(--light-color-red) !important;
                &::placeholder{color: var(--light-color-red) !important;}
            }
        `
        : css``}
    
    @media ${device.tablet}{}
    @media ${device.mobile}{
        justify-content: flex-start;
        flex-wrap: wrap;
        input{
            width: 100%;
            &:has(~ button){width: calc(100% - 5rem);}
        }
        input+div{width: 100%;}
    }
`
export const Txtright = styled.div`
    ${include.flex}
    gap: .4rem;
    align-items: center;
    margin-left: auto;
    
    @media ${device.tablet}{}
    @media ${device.mobile}{margin-top: .8rem;}
`

export const Btns = styled.button`
    font-size: 1.4rem;
    line-height: 2rem;
    padding: .2rem .6rem !important;
    font-weight: 500;
    box-sizing: border-box;
    @media ${device.mobile}{margin-left: auto;}
`