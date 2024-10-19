import React, { useState, useEffect } from 'react';
import * as S from './layout.style'

const LodingArea = () => {
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        if (loading) {
            const timer = setInterval(() => {
                setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
            }, 400);
            return () => clearInterval(timer);
        }
    }, [loading]);

    return (
        <S.LodingArea>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="14" width="4" height="4" stroke="currentColor" strokeWidth="2" />
                <rect x="9" y="10" width="4" height="8" stroke="currentColor" strokeWidth="2" />
                <rect x="17" y="4" width="4" height="14" stroke="currentColor" strokeWidth="2" />
            </svg>
        </S.LodingArea>
    );
};

export default LodingArea;