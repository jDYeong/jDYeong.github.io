import styled, {keyframes} from 'styled-components'

//mixin
export const include = {
    //폰트
    fontTitle: `
        font-family: "양진체";
        letter-spacing: 1.3px;
    `

    ,fontDefault :`
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        letter-spacing: normal;
    `

    ,borderStyle :`
        border-width: 1px 2px 2px 1px;
        border-style: solid;
    `

    //flex
    ,flex :`
        display: flex;
    `
    ,flexTop :`
        display: flex;
        align-items: flex-start;
        justify-content: center;
    `
    ,flexCenter :`
        display: flex;
        align-items: center;
        justify-content: center;
    `
    ,flexBottom :`
        display: flex;
        align-items: flex-end;
        justify-content: center;
    `
    ,flexColumn :`
        display: flex;
        flex-direction: column;
    `
    ,flexColumnTop :`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    `
    ,flexColumnBottom :`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    `
    ,flexColumnCenter :`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
}

export const bounceAni = keyframes`
    0%{transform: translateY(0);}
    50%{transform: translateY(-5px);}
    100%{transform: translateY(0);}
`
export const vibrationAni = keyframes`
    from {transform: translateY(-50%) rotate(10deg);}
    to {transform: translateY(-50%) rotate(-10deg);}
`