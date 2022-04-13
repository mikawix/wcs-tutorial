import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { AddElement } from '../../../add-element/add-element';

export default createBoard({
    name: 'AddElement',
    Board: () => <AddElement />
});
