// src/CustomCursor.js
import { useEffect, useState } from 'react';
import './Cursor.css';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const updateCursorPosition = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    useEffect(() => {
        // Track mouse movement
        window.addEventListener('mousemove', updateCursorPosition);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <>
            <div className={`cursor ${isHovered ? 'enlarged' : ''} border bg-none`} style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
            }}>
            </div>
            <div className={`cursor-small ${isHovered ? 'enlarged' : ''} h-2 w-2 bg-white`} style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
            }}>
            </div>
        </>
    );
};

export default CustomCursor;
