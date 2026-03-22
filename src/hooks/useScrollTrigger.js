import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that triggers animations when element enters viewport
 * Perfect for scroll-triggered counters and animations
 */
export const useScrollTrigger = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once animation is triggered
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start slightly before element is fully visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
};

/**
 * Hook for animated counter that starts from scroll trigger
 */
export const useScrollCounter = (targetValue, isTriggered, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(targetValue * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isTriggered, targetValue, duration]);

  return count;
};
