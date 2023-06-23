// components/Badge.tsx
import React from 'react';

interface BadgeProps {
    text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
    return <span>{text}</span>;
};

export default Badge;