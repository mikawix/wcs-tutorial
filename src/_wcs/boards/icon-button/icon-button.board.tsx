import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IconButton } from '../../../icon-button/icon-button';

export default createBoard({
    name: 'IconButton',
    Board: () => <IconButton />
});
