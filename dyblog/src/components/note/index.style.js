import styled, { css } from 'styled-components'
import '../../assets/scss/setting/_var.scss';
import {include} from '../../common/mixin.style';
import { device } from '../../common/MediaQuery';

export const NoteContent = styled.div`
    padding: 12rem 7rem;
    
    @media ${device.tablet}{padding: 0 4rem;}
    @media ${device.mobile}{padding: 0 2rem;}
`
export const ListContent = styled.div`
    padding: 6rem 0;
    
    @media ${device.tablet}{padding: 3rem 0;}
    @media ${device.mobile}{padding: 3rem 0;}
`