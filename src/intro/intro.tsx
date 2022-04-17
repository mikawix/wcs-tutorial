import React from 'react';
import './intro.scss';
import foo from '../assets/welcome.png';

export const Intro: React.FC = () => {
    return (
        <div className='intro'>
            <img src={foo} />
            <div className="flexRow"></div></div>
    )
};
