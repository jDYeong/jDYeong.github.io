import React from 'react';

const ThemeButton = () => {
    return (
        <button type='button' className='btn-type1'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H14V4H12V6H10V4H6V2ZM4 6V4H6V6H4ZM4 16H2V6H4V16ZM6 18H4V16H6V18ZM8 20H6V18H8V20ZM18 20V22H8V20H18ZM20 18V20H18V18H20ZM18 14V12H20V10H22V18H20V14H18ZM12 14H18V16H12V14ZM10 12H12V14H10V12ZM10 12V6H8V12H10ZM18 2H20V4H22V6H20V8H18V6H16V4H18V2Z" fill="black"/>
            </svg>
        </button>
    );
};

export default ThemeButton;