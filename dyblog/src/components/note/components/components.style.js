import styled, { css } from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

/* 공통 헤더(x버튼 영역) */
export const SubHeader = styled.div`
    
`
export const DeleteBtn = styled.button`
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

/* 목록 list items */
export const ListArea = styled.ul`
    ${include.flex}
    flex-wrap: wrap;
    gap: 2.4rem;

    @media ${device.mobile}{gap: 3.2rem;}
`
export const ListItem = styled.li`
    width: calc(50% - 1.2rem);
    padding: 1.8rem;
    box-sizing: border-box;
    transition: transform .23s ease;
    &:hover{
        transform: translateY(-5px);
    }
    
    @media ${device.mobile}{
        width: 100%;
        padding: 0 0 1.2rem;
    }
`
export const ImgBox = styled.div`
    ${include.flexCenter}
    max-width: 100%;
    height: 15rem;
    margin-bottom: 1.2rem;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    overflow: hidden;
    background: white;
    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media ${device.mobile}{
        margin-bottom: .8rem;
        background: lightgray;
    }
`
export const TxtBox = styled.div`
    ${include.flexColumn}
    gap: .8rem 0;
    
    @media ${device.mobile}{gap: .4rem 0;}
`

export const Title = styled.strong`
    font-size: 1.8rem;
    line-height: 2.4rem;
    ${include.lineEllipsis2}
    
    @media ${device.mobile}{
        font-size: 1.6rem;
        line-height: 1.9rem;
    }
`
export const SubTitle = styled.p`
    font-size: 1.4rem;
    line-height: 1.9rem;
    ${include.lineEllipsis2}
`
export const Row = styled.div`
    ${include.flex}
    justify-content: space-between;
`
export const Txt = styled.span`
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: var(--light-color-gray);
`
//목록 노데이터
export const ListNodata = styled.div`
    ${include.flexColumnCenter}
    width: 100%;
    height: 16rem;
    gap: .8rem;
    font-size: 1.6rem;
    line-height: 1.2;
    font-weight: 500;
`

/* 상세 tag items */
export const TagsListArea = styled.ul`
    ${include.flex}
    gap: 0 .8rem;
    margin-top: 3rem;
`

export const TagItem = styled.li`
    padding: .2rem .8rem;
    border-radius: 2rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
`
