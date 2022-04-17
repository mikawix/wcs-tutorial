import React from 'react';
import './intro.scss';
import welcome from '../assets/welcome.png';

export const Intro: React.FC = () => {
    return (
        <div className='intro'>
            <img src={welcome} /></div>
    )
};
