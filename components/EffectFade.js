import React, { useEffect, useRef, useState } from 'react';
import styles from '/styles/effect.module.css'; // CSSモジュールをインポート

export default function EffectFade() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top } = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={elementRef} className={`${styles['effect-fade']} ${isVisible ? styles['effect-scroll'] : ''}`}>
      {/* Content goes here */}
    </div>
  );
}
