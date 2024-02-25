import React, { useEffect } from 'react';

function TextTypingAnime() {
  useEffect(() => {
    const textTypingElements = document.querySelectorAll('.TextTyping');
    
    const handleScroll = () => {
      textTypingElements.forEach((element) => {
        const elemPos = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elemPos < windowHeight) {
          const childElements = element.children;
          Array.from(childElements).forEach((child, i) => {
            const time = 100;
            setTimeout(() => {
              child.style.transition = `opacity ${time}ms`;
              child.style.opacity = '1';
            }, time * i);
          });
        } else {
          const childElements = element.children;
          Array.from(childElements).forEach((child) => {
            child.style.transition = 'none';
            child.style.opacity = '0';
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

export default TextTypingAnime;
