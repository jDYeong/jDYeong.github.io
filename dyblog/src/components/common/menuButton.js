import React from 'react';

const MenuButton = () => {
    return (
        <button type='button' className='btn-type1'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 5H19V7H3V5Z" fill="#222222"/>
                <path d="M3 10H19V12H3V10Z" fill="#222222"/>
                <path d="M3 15H19V17H3V15Z" fill="#222222"/>
            </svg>
        </button>
    );
};

export default MenuButton;