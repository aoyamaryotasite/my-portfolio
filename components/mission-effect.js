import React, { useEffect } from 'react';


export default function MissionEffect() {
  // スクロール時の処理
  const handleScroll = () => {
    let scroll = window.pageYOffset;
    let area = document.querySelector(".mission");
    let missionTitle = document.querySelector('.mission-h2');
    let scFirst = document.querySelector('.sc-first');
    let scThird = document.querySelector('.sc-third');

    if (scroll > 800) {
      area.classList.add('color-change');
      missionTitle.classList.add('h2-move');
    }

    if (scroll > 1100) {
      scFirst.classList.add('sticky');
    }

  };

  // TextTypingアニメーションの関数
  const textTypingAnime = () => {
    document.querySelectorAll('.TextTyping').forEach(element => {
      const elemPos = element.getBoundingClientRect().top - 50;
      const scroll = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const childElements = element.children;
      if (scroll >= elemPos - windowHeight) {
        Array.from(childElements).forEach((child, i) => {
          const time = 100;
          setTimeout(() => {
            child.style.opacity = '1';
          }, time * i);
        });
      } else {
        Array.from(childElements).forEach(child => {
          child.style.transition = 'none';
          child.style.opacity = '0';
        });
      }
    });
  };

  // スクロールイベントを登録
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // コンポーネントのアンマウント時にイベントを解除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ページ読み込み時の処理
  useEffect(() => {
    window.addEventListener('load', () => {
      document.querySelectorAll('.TextTyping').forEach(element => {
        const text = element.innerHTML;
        let newText = '';
        text.split('').forEach(char => {
          newText += char !== ' ' ? `<span style="opacity: 0;">${char}</span>` : ' ';
        });
        element.innerHTML = newText;
      });
      textTypingAnime();
    });
  }, []);

  return null; // このコンポーネントは何もレンダリングしない
}
