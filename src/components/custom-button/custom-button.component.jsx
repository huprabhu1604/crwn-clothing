import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherCustomButtonProps}) => (
    <button {...otherCustomButtonProps} className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}>{children}</button>
)

export default CustomButton;