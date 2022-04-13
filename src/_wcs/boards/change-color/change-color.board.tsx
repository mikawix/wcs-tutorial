import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ChangeColor } from '../../../change-color/change-color';

export default createBoard({
    name: 'ChangeColor',
    Board: () => <ChangeColor />
});
