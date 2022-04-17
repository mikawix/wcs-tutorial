import React from 'react';
import './lesson-1.scss';
import { Intro } from '../intro/intro';

export const Lesson1: React.FC = () => {
    return <div className='lesson-1__root'>
        <div className="lesson1Desc">
            <div className="l1progress">01/09</div>
            <div className="l1title">
                <h1>Intro to WCS</h1>
            </div>
            <div className="l1task">
                <li>This is a board. To edit or style elements, select them on stage or on the layer panel to the left.		</li>
                <li>When element is selected,you can inspect or edit its style, or change properties on theright panel.</li>
                <li>To preview, click on the select/preview toggle or click Option+V and click on the image to see how it acts.</li>
            </div>
        </div>
        <div className="lesson1Card">
            <Intro />
        </div></div>;
};
