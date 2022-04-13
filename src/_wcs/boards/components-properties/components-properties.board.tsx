import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ComponentsProperties } from '../../../components-properties/components-properties';

export default createBoard({
    name: 'ComponentsProperties',
    Board: () => <ComponentsProperties />
});
