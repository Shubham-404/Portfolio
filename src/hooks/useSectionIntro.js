import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * A hook to animate a section's entry when it scrolls into view.
 * @param {Object} options
 * @param {boolean} options.enable - Whether to enable the animation (default: true)
 * @param {string} options.selector - Selector for children to animate (default: null, animates the container itself if null, or specific children if provided)
 * @param {string} options.animationType - 'fadeUp' | 'scaleIn' | 'slideIn' (default: 'fadeUp')
 * @param {number} options.stagger - Stagger time between elements (default: 0.1)
 * @param {number} options.delay - Initial delay (default: 0)
 * @param {string} options.start - ScrollTrigger start position (default: 'top 80%')
 */
const useSectionIntro = ({
    enable = true,
    selector = null,
    animationType = 'fadeUp',
    stagger = 0.1,
    delay = 0,
    start = 'top 80%',
} = {}) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!enable || !containerRef.current) return;

        const elements = selector
            ? gsap.utils.toArray(selector, containerRef.current)
            : [containerRef.current];

        if (elements.length === 0) return;

        let fromVars = { opacity: 0 };
        let toVars = {
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: stagger,
            delay: delay,
            scrollTrigger: {
                trigger: containerRef.current,
                start: start,
                toggleActions: 'play none none reverse',
            },
        };

        switch (animationType) {
            case 'fadeUp':
                fromVars.y = 50;
                toVars.y = 0;
                break;
            case 'scaleIn':
                fromVars.scale = 0.8;
                toVars.scale = 1;
                break;
            case 'slideIn':
                fromVars.x = -50;
                toVars.x = 0;
                break;
            default:
                fromVars.y = 30; // Default slight fade up
                toVars.y = 0;
        }

        gsap.fromTo(elements, fromVars, toVars);

    }, { scope: containerRef, dependencies: [enable, animationType, stagger, delay] });

    return containerRef;
};

export default useSectionIntro;
