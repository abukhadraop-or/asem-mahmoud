

import { useEffect, useState } from 'react';

/**
 * Check if the element in the view or not.
 *
 * @param {Object} ref The Element to check it.
 *
 * @return {boolean} Flag if the element in screen.
 */
export default function useIntersectionObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};
