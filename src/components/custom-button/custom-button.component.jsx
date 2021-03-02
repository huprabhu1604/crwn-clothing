import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, ...otherCustomButtonProps}) => (
    <button {...otherCustomButtonProps} className="custom-button">{children}</button>
)

export default CustomButton;