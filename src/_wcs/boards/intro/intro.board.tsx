import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../intro/intro';

export default createBoard({
    name: 'Intro',
    Board: () => <Intro/>
});