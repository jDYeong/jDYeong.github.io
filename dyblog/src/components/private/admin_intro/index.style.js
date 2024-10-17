import styled, { css } from 'styled-components'
import '../../../assets/scss/setting/_var.scss';
import {include} from '../../../common/mixin.style';
import { device } from '../../../common/MediaQuery';

export const AdminIntroContent = styled.div`
    padding-top: var(--main-btns-pc-height);

    @media ${device.tablet}{padding-top: var(--main-btns-mob-height);}
    @media ${device.mobile}{padding-top: var(--main-btns-mob-height);}
`