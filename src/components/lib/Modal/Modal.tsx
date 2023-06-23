import React from 'react';

interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
    return (
        <div>
            {/* Modal implementation */}
        </div>
    );
};

export default Modal;