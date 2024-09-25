import styled, { css } from 'styled-components'
import '../../assets/scss/setting/_var.scss';
import {include, bounceAni} from '../../common/mixin.style';
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
        padding: ${props => props.$width ? 0 : '0 7rem'};
        gap: 0 3.4rem;
        
        @media ${device.tablet} { 
            flex-direction: column;
            gap: 3rem 0;
        }
        @media ${device.mobile} {
            flex-direction: column;
            padding: ${props => props.$width || props.$mobWidth ? 0 : '0 2rem'};
            gap: 3rem 0;
        }
    }

    ${props => 
        props.$flexColumn && css`
            &>div{
                flex-direction: column;
                
                @media ${device.tablet} {
                    gap: 0;
                }
                @media ${device.mobile} {
                    gap: 0;
                }
            }
        `
    }
    ${props => 
        props.$flexCenter && css`
            &>div{
                ${include.flexCenter}
            }
        `
    }
    ${props =>
        props.$workContnet && css`
            padding: 3rem 0;
        `
    }
`
export const IntroTitle = styled.h2`
    ${include.fontTitle}
    font-size: 3rem;
    line-height: 1.4;
    font-weight: 800;
    margin-bottom: ${props => props.$margin === false ? 0 : '4rem'};
        
    @media ${device.tablet} { 
        
    }
    @media ${device.mobile} {
        font-size: 2rem;
        margin-bottom: ${props => props.$margin === false ? 0 : '1.6rem'};
    }
`