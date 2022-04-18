import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../intro/intro';

export default createBoard({
    name: 'Intro',
    Board: () => <Intro />,
    environmentProps: {
        windowWidth: 540,
        windowHeight: 605,
        canvasWidth: 400,
        canvasHeight: 560
    }
});
