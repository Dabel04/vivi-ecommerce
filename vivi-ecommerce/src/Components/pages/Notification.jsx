import React, { useEffect } from 'react';

export default function Notification({ message, onClose, duration = 1000 }) {
    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(() => onClose(), duration);
        return () => clearTimeout(timer);
    }, [message, onClose, duration]);

    if (!message) return null;

    const style = {
        position: 'fixed',
        top: 20,
        right: 20,
        background: '#0f4f6e',
        color: 'white',
        padding: '15px 20px',
        borderRadius: 6,
        zIndex: 4000,
        boxShadow: '0 6px 18px rgba(0,0,0,0.15)'
    };

    return (
        <div style={style} role="status" aria-live="polite">
            {message}
        </div>
    );
}