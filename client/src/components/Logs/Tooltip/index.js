import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import './ReactTooltip.css';

const Tooltip = ({
    id, children, className = '', place = 'right',
}) => (
    <ReactTooltip
        id={id}
        aria-haspopup="true"
        effect="solid"
        place={place}
        className={`custom-tooltip ${className}`}
        backgroundColor="#fff"
        arrowColor="transparent"
        textColor="#4d4d4d"
        delayHide={300}
    >
        {children}
    </ReactTooltip>
);

Tooltip.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    place: PropTypes.string,
};

export default Tooltip;
