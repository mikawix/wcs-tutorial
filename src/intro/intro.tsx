import React from 'react';
import './intro.scss';
import welcome from '../assets/welcome.png';
import { IntroRectangle } from '../intro-rectangle/intro-rectangle';

export const Intro: React.FC = () => {
    return (
        <div className='intro'>
            <img src={welcome} />
            <IntroRectangle className="positionA" shape="ellipse" size="medium"></IntroRectangle>
            <IntroRectangle className="positionB" shape="ellipse" size="medium" />
            <IntroRectangle className={'positionC'} size="small" shape="ellipse" />
            <IntroRectangle className="positionD" size="medium" shape="circle" />
            <IntroRectangle shape="circle" className={'positionE'} size="small" />
            <IntroRectangle className="positionF" shape="circle" size="small" />
            <IntroRectangle className={'positionG'} shape="ellipse" size="medium" />
            <IntroRectangle className="positionH" shape="circle" size="large" />
        </div>
    )
};
