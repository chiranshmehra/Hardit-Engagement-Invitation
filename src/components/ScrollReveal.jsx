import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, animation = 'fade-up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      if (animation === 'fade-up') return 'opacity-0 translate-y-10';
      if (animation === 'fade-down') return 'opacity-0 -translate-y-10';
      if (animation === 'zoom-in') return 'opacity-0 scale-90';
      return 'opacity-0 translate-y-8';
    }
    return 'opacity-100 translate-y-0 scale-100';
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

