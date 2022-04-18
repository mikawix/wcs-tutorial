import React from 'react';
import './intro.scss';
import welcome from '../assets/welcome.png';
import { IntroRectangle } from '../intro-rectangle/intro-rectangle';

export const Intro: React.FC = () => {
    return (
        <div className='intro'>
            <img src={welcome} />
            <IntroRectangle className="positionA" shape="ellipse" size="small"></IntroRectangle>
            <IntroRectangle className="positionB" />
        </div>
    )
};
