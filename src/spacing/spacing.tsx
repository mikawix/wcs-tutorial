import React from 'react';
import './spacing.scss';
import { MedButton } from '../med-button/med-button';

export const Spacing: React.FC = () => {
    return <div className='spacing__root'>
        <div className="spaceRow">
            <div className="circle">N</div>
            <div className="circle">I</div>
            <div className="circle">C</div>
            <div className="circle">E</div>
        </div>
        <div className="line" />
        <div className="giveSpace">Give Me Some Space</div></div>;
};
