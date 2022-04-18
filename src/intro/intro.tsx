import React from 'react';
import './intro.scss';
import welcome from '../assets/welcome.png';
import { IntroRectangle } from '../intro-rectangle/intro-rectangle';

export const Intro: React.FC = () => {
    return (
        <div className='intro'>
            <img src={welcome} />
            <IntroRectangle shape="ellipse" size="large" angle={-37} backgroundColor="#B6C1F0" left={1} top={52} zIndex={1} />
            <IntroRectangle shape="ellipse" size="medium" angle={5} backgroundColor="#92D0AB" left={23} top={51} zIndex={0} />
            <IntroRectangle shape="ellipse" size="small" angle={-62} backgroundColor="#DCD9BF" left={122} top={95} zIndex={1} />
            <IntroRectangle shape="circle" size="medium" angle={18} backgroundColor="#7FC2F4" left={219.37} top={64} />
            <IntroRectangle shape="circle" size="small" backgroundColor="#FF2F2F" left={60} top={113} zIndex={3} />
            <IntroRectangle shape="circle" size="small" backgroundColor="#F486C9" left={143} top={106} zIndex={1} />
            <IntroRectangle shape="ellipse" size="medium" angle={-17} backgroundColor="#7FC2F4" left={24} top={166} />
            <IntroRectangle shape="circle" size="large" backgroundColor="#FFB615" left={99} top={140} zIndex={2} />
            <IntroRectangle shape="ellipse" size="medium" backgroundColor="#FF5B2B" left={192} top={148} zIndex={1} />
            <IntroRectangle backgroundColor="#268040" angle={38} zIndex={1} top={228} left={28} size="medium" shape="circle" />
            <IntroRectangle backgroundColor="#A09D2A" left={180} top={228} size="medium" shape="circle" zIndex={2} />
            <IntroRectangle backgroundColor="#6A55A2" left={235} top={208} shape="ellipse" size="small" angle={-17} />
        </div>
    )
};
