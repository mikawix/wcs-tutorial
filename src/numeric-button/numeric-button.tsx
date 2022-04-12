import React from 'react';
import './numeric-button.scss';

export const NumericButton: React.FC = () => {
    return <div className='numeric-button__root'>
        <div className="buttonRow">
            <div className="one numeric">1</div>
            <div className="two numeric">2</div></div>
        <div className="buttonRow">
            <div className="three numeric">3</div>
            <div className="four numeric">4</div>
        </div>
        <div className="buttonRow">
            <div />
        </div>
        <div className="buttonRow" /></div>;
};
