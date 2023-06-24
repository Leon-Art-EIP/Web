import React from 'react';
import './Badge.css';

export interface BadgeProps {
    text: string;
    color?: 'danger' | 'success' | 'info';
}

const Badge: React.FC<BadgeProps> = ({ text, color }) => {
    const className = color ? `badge badge-${color}` : 'badge';
    return <span className={className}>{text}</span>;
};

export default Badge;
