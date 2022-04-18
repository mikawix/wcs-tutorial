import React from 'react';
import './intro-rectangle.scss';

export interface IntroRectabngleProps {
    className?: 'string';
    size?: 'small' | 'medium' | 'large';
    shape?: 'circle' | 'ellipse';
}

export const IntroRectangle: React.FC<IntroRectabngleProps> = ({
    className='rectangle',
    size = 'small',
    shape = 'circle'

}) => {
    let recClass: string = 'rectangle';
    switch (size) {
        case 'small':
            recClass = shape === 'circle' ? 'smallCircle' : 'smallEllipse'
            break;
        case 'medium':
            recClass = shape === 'circle' ? 'medCircle' : 'medEllipse'
            break;
        case 'large':
            recClass = shape === 'circle' ? 'largeCircle' : 'largeEllipse'
            break;
    }

    return (
        <div className={recClass+" "+className}></div>
    );
};