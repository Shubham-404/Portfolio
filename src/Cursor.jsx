import { useEffect, useState, useRef } from 'react';
import './Cursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);  // Ref for the cursor element
  const smallCursorRef = useRef(null);  // Ref for the small cursor element
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    // Update cursor position directly
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    // Track mouse movement
    const update = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', update);
    return () => {
      window.removeEventListener('mousemove', update);
    };
  }, []);

  useEffect(() => {
    // Make sure the cursor follows the mouse smoothly using `requestAnimationFrame`
    const cursor = cursorRef.current;
    const smallCursor = smallCursorRef.current;

    if (cursor && smallCursor) {
      const updatePosition = () => {
        const { x, y } = cursorPosition;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        smallCursor.style.left = `${x}px`;
        smallCursor.style.top = `${y}px`;

        requestAnimationFrame(updatePosition); // Keep updating smoothly
      };

      updatePosition(); // Initiate the smooth movement loop
    }
  }, [cursorPosition]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor ${isHovered ? 'enlarged' : ''}`}
      ></div>
      <div
        ref={smallCursorRef}
        className={`cursor-small ${isHovered ? 'enlarged' : ''}`}
      ></div>
    </>
  );
};

export default CustomCursor;
