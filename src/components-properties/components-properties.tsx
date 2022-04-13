import React from 'react';
import './components-properties.scss';
import { IconButton } from '../icon-button/icon-button';

export const ComponentsProperties: React.FC = () => {
    return <div className='components-properties__root'>
        <div className="CompContainer">
            <div className="CompRow">
                <IconButton />
                <IconButton />
                <IconButton />
            </div>
            <div className="CompRow">
                <IconButton />
                <IconButton />
                <IconButton />
            </div>
            <div className="CompRow">
                <IconButton></IconButton>
                <IconButton />
                <IconButton />
            </div>
        </div>ComponentsProperties</div>;
};
