import styled from 'styled-components'
import '../../assets/scss/setting/_var.scss';
import { device } from '../../common/MediaQuery';

export const IntroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem 0;
    padding: 12rem 0;
    
    @media ${device.tablet} { 
        padding: 3rem 0;
        gap: 3rem 0;
    }
    @media ${device.mobile} { 
        padding: 3rem 0;
        gap: 3rem 0;
    }
`
export const RowContent = styled.div`
    &>div{
        display: flex;
        padding: 0 7rem;
        gap: 0 3.4rem;
        
        @media ${device.tablet} { 
            flex-direction: column;
            gap: 3rem 0;
        }
        @media ${device.mobile} {
            flex-direction: column;
            padding: 0;
            gap: 3rem 0;
        }
    }
    
`