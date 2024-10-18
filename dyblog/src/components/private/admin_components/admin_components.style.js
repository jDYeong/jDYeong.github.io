import styled, { css } from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';


/* 어드민 공통 */
export const AdminContent = styled.div`
    position: relative;
    z-index: 101;
    top: calc(-4rem - 1px);

    @media ${device.tablet}{top: 0;}
    @media ${device.mobile}{top: 0;}
`
export const SubHeader = styled.div`
    .btn_save{
        line-height: 1rem;
        vertical-align: top;
    }
`

//어드민 공통 헤더 영역
export const AdminHeader = styled.div`
    padding: 0 0 6rem;
    
    @media ${device.tablet}{padding: 0 0 3rem;}
    @media ${device.mobile}{padding: 0 0 3rem;}
`
export const SubTit = styled.span`
    font-size: 1.8rem;
    line-height: 1.2;
    
    @media ${device.mobile}{font-size: 1.6rem;}
`
export const Tit = styled.h1`
    font-size: 3.8rem;
    line-height: 1.2;
    font-weight: 700;
    margin-top: .8rem;

    @media ${device.mobile}{
        font-size: 2.4rem;
        margin-top: .6rem;
    }
`



/* 등록화면 공통 */
export const WriteContent = styled.div`

    @media ${device.tablet}{top: 0;}
    @media ${device.mobile}{top: 0;}
`

//컨텐츠 영역
export const TitleArea = styled.div``
export const DescArea = styled.div`
    .ql-container{height: calc(100% - 42px);}
    margin-top: 3rem;
    
    @media ${device.mobile}{
        .ql-container{height: calc(100% - 66px);}
        margin-top: 1.8rem;
    }
`
export const InpBox = styled.div`
    margin-top: 1rem;
    &:first-of-type{margin-top: 0;}

    ${(props) =>
    props.$error
    ? css`
        input{
            border-color: var(--light-color-red);
            &::placeholder{color: var(--light-color-red);}
        }
    `
    : css``}
    
    @media ${device.mobile}{margin-top: .6rem;}
`
export const Input = styled.input`
    display: block;
    padding: .9rem 1.6rem;
    font-size: 1.6rem;
    line-height: 1.9rem;
    outline: none;
    
    @media ${device.mobile}{
        padding: .6rem 1.2rem;
        font-size: 1.4rem;
    }
`

//버튼 영역
export const BtnArea = styled.div`
    ${include.flexCenter}
    gap: 0 .8rem;
    margin-top: 6rem;

    @media ${device.tablet}{margin-top: 3rem;}
    @media ${device.mobile}{margin-top: 3rem;}
`
export const BtnSave = styled.button`
    display: inline-block;
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 500;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    padding: .8rem 1.6rem;
    box-sizing: border-box;
    @media ${device.mobile}{padding: .8rem 1.2rem;}
`
export const BtnCancel = styled.button`
    display: inline-block;
    font-size: 1.4rem;
    line-height: 1.7rem;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    padding: .8rem 1.6rem;
    box-sizing: border-box;
    @media ${device.mobile}{padding: .8rem 1.2rem;}
`