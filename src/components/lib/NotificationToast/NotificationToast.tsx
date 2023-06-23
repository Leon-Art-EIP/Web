import React from 'react';

interface NotificationToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
}

const NotificationToast: React.FC<NotificationToastProps> = ({ message, type }) => {
    return (
        <div>
            {/* Toast implementation */}
        </div>
    );
};

export default NotificationToast;