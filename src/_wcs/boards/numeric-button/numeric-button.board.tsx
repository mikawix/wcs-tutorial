import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NumericButton } from '../../../numeric-button/numeric-button';

export default createBoard({
    name: 'NumericButton',
    Board: () => <NumericButton />
});
