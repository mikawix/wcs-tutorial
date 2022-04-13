import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MedButton } from '../../../med-button/med-button';

export default createBoard({
    name: 'MedButton',
    Board: () => <MedButton />
});
