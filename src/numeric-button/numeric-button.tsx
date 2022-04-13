import React from 'react';
import './numeric-button.scss';

export const NumericButton: React.FC = () => {
    return <div className="cover"> <div className='numeric-button__root'>
        <div className="buttonRow">
            <div className="one numeric">1</div>
            <div className="two numeric">2</div></div>
        <div className="buttonRow">
            <div className="three numeric">3</div>
            <div className="four numeric">4</div>
        </div>
        <div className="buttonRow">
            <div className="five numeric">5</div>
        </div>
        <div className="buttonRow">
            <div className="six numeric">6</div>
            <div className="seven numeric">7</div>
            <div className="eight numeric">8</div>
        </div>
    </div>
    </div>;
};
