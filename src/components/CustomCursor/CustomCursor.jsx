import { useEffect } from 'react';
import gsap from 'gsap';

import './CustomCursor.css';

const CustomCursor = () => {
    useEffect(() => {
        const handleMouseMove = event => {
            cursorMovingAnimation(event);
        };

        const cursorMovingAnimation = event => {
            try {
                const timing = gsap.timeline({
                    defaults: {
                        x: event.clientX,
                        y: event.clientY,
                    },
                });

                timing.to(
                    '.cs_cursor_sm',
                    {
                        x: event.clientX,
                        y: event.clientY,
                        ease: 'power2.out',
                    },
                    '-=0.01'
                );
            } catch (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <span className="cs_cursor_sm" />
        </>
    );
};

export default CustomCursor;
