import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Lesson1 } from '../../../lesson-1/lesson-1';

export default createBoard({
    name: 'Lesson1',
    Board: () => <Lesson1 />
});
