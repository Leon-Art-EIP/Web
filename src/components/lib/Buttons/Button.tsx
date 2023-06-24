import React from 'react';
import './Button.css';

export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    color?: 'danger' | 'success' | 'info';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color }) => {
    const className = color ? `button button-${color}` : 'button';
    return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
