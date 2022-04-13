import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { RoundButton } from '../../../round-button/round-button';

export default createBoard({
    name: 'RoundButton',
    Board: () => <RoundButton />
});
