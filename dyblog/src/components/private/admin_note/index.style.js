import styled, { css } from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const AdminNoteContent = styled.div`
    padding: 12rem 7rem;
    form{display: block;}
    
    @media ${device.tablet}{padding: 6rem 4rem;}
    @media ${device.mobile}{padding: 6rem 2rem;}
`