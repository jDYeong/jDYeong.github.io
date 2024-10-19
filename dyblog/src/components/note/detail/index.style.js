import styled, { css } from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const DetailContent = styled.div`
    position: relative;
    z-index: 101;
    top: calc(-4rem - 1px);

    @media ${device.tablet}{top:0;}
    @media ${device.mobile}{top:0;}
`
export const NoteDetailContent = styled.div`
    padding: 16rem 7rem;
    
    @media ${device.tablet}{padding: 11rem 4rem;}
    @media ${device.mobile}{padding: 11rem 2rem;}
`
export const NoteDescArea = styled.div`
    margin-top: 6rem;
    
    @media ${device.tablet}{}
    @media ${device.mobile}{}
`
export const DetailContentTxt = styled.div`
    font-size: 1.6rem;
    line-height: 1.9rem;
    img{max-width: 100%;}
`
