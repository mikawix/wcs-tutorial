import {useEffect, useState, useRef} from 'react';
import './intro-cursor.scss';

export function IntroCursor() {
    const circleCount = 10;
    const mouseCoords = useRef({x: 0, y: 0});

    const [circles, setCircles] = useState(() => Array.from({length: circleCount}, () => ({x: 0, y: 0})));

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseCoords.current = {x: e.clientX, y: e.clientY};
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleInterval = () => {
            const {x, y} = mouseCoords.current;
            setCircles((prev) => [{x, y}, ...prev].slice(0, circleCount));
        };
        const interval = setInterval(handleInterval, 16);
        return () => {
            clearInterval(interval);
        };
    });

    const circleElements = circles.map(({x, y}, i) => {
        const scale = (30 * (circleCount - i)) / circleCount;
        const style = {left: x, top: y, transform: `scale(${scale})`};
        return <div key={i} className="intro-cursor" style={style} />;
    });

    return <>{circleElements}</>;
}
