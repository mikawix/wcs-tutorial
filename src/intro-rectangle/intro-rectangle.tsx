import React from 'react';
import './intro-rectangle.scss';

export interface IntroRectabngleProps {
    size?: 'small' | 'medium' | 'large';
    shape?: 'circle' | 'ellipse';
}

export const IntroRectangle: React.FC<IntroRectabngleProps> = ({
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
        default:
            recClass = 'rectangle'
            break;
    }
    
    return (
        <div className={recClass}></div>
    );
};