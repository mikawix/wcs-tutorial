import React from 'react';
import './add-element.scss';
import { RoundButton } from '../round-button/round-button';
import { MedButton } from '../med-button/med-button';

export const AddElement: React.FC = () => {
    return <div className='add-element__root'>
        <div className="container">
            <div className="elementRow">
                <MedButton />
                <RoundButton /></div>
            <div className="dragHere">
                <RoundButton />
                <MedButton />
            </div>
            <div className="elementRow">
                <MedButton />
                <RoundButton></RoundButton>
            </div>
        </div>AddElement</div>;
};
