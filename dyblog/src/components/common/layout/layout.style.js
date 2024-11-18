import styled, { css } from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include, colorfull} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';
import { Link } from "react-router-dom";

/* 목록 타이틀 영역 */
export const ListTitleArea = styled.div`
    ${include.flex}
    align-items: center;
    justify-content: space-between;
`
export const ListTitle = styled.h1`
    ${include.fontTitle}
    font-size: 3.8rem;
    line-height: 4.5rem;
    font-weight: 700;
    
    @media ${device.mobile}{
        font-size: 3rem;
        line-height: 2.9rem;
    }
`
export const BtnArea = styled.div`
    a{display: block;}
`

/* 상세페이지 타이틀 영역 */
export const DetailTitleArea = styled.div`
    ${include.flexColumn}
    gap: 1.2rem 0;
`
export const DetailCateArea = styled.div`
    ${include.flex}
    justify-content: space-between;
`
export const DetailCate = styled.span`
    font-size: 1.8rem;
    line-height: 2.1rem;
`
export const DetailDate = styled.span`
    font-size: 1.2rem;
    line-height: 2.1rem;
    color: var(--light-color-gray);
`

export const DetailTitle = styled.h1`
    font-size: 3.2rem;
    line-height: 3.8rem;
    font-weight: 700;
`
export const DetailSubTitle = styled.h2`
    font-size: 1.8rem;
    line-height: 2.1rem;
    font-weight: 400;
`

// 상세페이지 페이징 영역
export const DetailPagingArea = styled.div`
    ${include.flexCenter}
    justify-content: space-between;
    border-top: 1px solid;
    padding: 1.2rem;
    margin-top: 6rem;
    
    @media ${device.mobile}{
        padding: 1.2rem 0;
        margin-top: 3rem;
    }

`
export const CenterBtns = styled.div`
    ${include.flexCenter}
    gap: 0 .8rem;
    width: 20%;
    svg{
        width: 2.4rem;
        height: 2.4rem;
    }
    @media ${device.mobile}{gap: 0 .4rem;}
`

//export const ArrBtn = styled(Link)`
export const ArrBtn = styled.button`
    ${include.flex}
    align-items: center;
    width: 40%;
    gap: .6rem;
    font-size: 1.4rem;
    line-height: 1.9rem;
    svg{flex-shrink:0;}
    span{flex-shrink:0;}
    p{
        ${include.lineEllipsis1}
    }
    &:hover p{
        text-decoration: underline;
    }

    @media ${device.mobile}{
        p{
            display: none;
        }
        gap: .4rem;
    }

    ${(props) => props.$prev ? css`svg{transform: rotate(180deg);}` : css``}
    ${(props) => props.$next ? css`justify-content:flex-end` : css``}
`

export const LinkBtn = styled(Link)``
export const DeleteBtnBottom = styled.button``
export const UpdateBtnBottom = styled.button``


/* 로딩영역 */
export const LodingArea = styled.div`
    ${include.flexCenter}
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 20rem;
    z-index: 101;
    svg{
        rect{
            animation: ${colorfull} 1s ease infinite;
            fill: none;
            &:nth-child(1){animation-delay: 0s;}
            &:nth-child(2){animation-delay: 0.2s;}
            &:nth-child(3){animation-delay: 0.4s;}
        }
    }
    @media ${device.mobile}{
        top: 13rem;
    }
`