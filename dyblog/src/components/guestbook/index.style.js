import styled, { css } from 'styled-components'
import '../../assets/scss/setting/_var.scss';
import {include} from '../../common/mixin.style';
import { device } from '../../common/MediaQuery';

export const GBContent = styled.div`
    padding: 12rem 7rem;
    
    @media ${device.tablet}{padding: 0 4rem;}
    @media ${device.mobile}{padding: 0 2rem;}
`
export const ListContent = styled.div`
    padding: 6rem 0;
    ul{
        ${include.flexColumn}
        gap: 1.2rem;
        margin-top: 3rem;
    }
    
    @media ${device.tablet}{padding: 3rem 0;}
    @media ${device.mobile}{padding: 3rem 0;}
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