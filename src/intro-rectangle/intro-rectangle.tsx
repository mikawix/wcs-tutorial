import React, {useState, CSSProperties} from 'react';
import './intro-rectangle.scss';

export interface IntroRectabngleProps {
    shape?: 'circle' | 'ellipse';
    size?: 'small' | 'medium' | 'large';
    left?: number;
    top?: number;
    zIndex?: number;
    angle?: number;
    backgroundColor?: string;
}

export const IntroRectangle: React.FC<IntroRectabngleProps> = ({
    shape = 'circle',
    size = 'small',
    left = 0,
    top = 0,
    zIndex,
    angle = 0,
    backgroundColor = '#FF2F2F'
}) => {
    const [visible, setVisible] = useState(true);

    const className = 'intro-shape ' + shape + ' ' + size;

    const style: CSSProperties = {
        visibility: visible ? 'visible': 'hidden',
        left,
        top,
        zIndex,
        backgroundColor,
        transformOrigin: 'center',
        transform: `rotate(${angle}deg)`
    };

    return <div onMouseEnter={() => setVisible(false)} className={className} style={style} />;
};