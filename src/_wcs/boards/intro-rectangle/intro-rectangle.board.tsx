import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IntroRectangle } from '../../../intro-rectangle/intro-rectangle';

export default createBoard({
    name: 'IntroRectangle',
    Board: () => <IntroRectangle />,
    environmentProps: {
        windowHeight: 800,
        canvasWidth: 62,
        canvasHeight: 64
    }
});