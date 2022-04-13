import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Spacing } from '../../../spacing/spacing';

export default createBoard({
    name: 'Spacing',
    Board: () => <Spacing />
});
