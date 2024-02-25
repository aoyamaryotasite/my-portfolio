import{ useEffect } from 'react';

export default function TitleDisplay() {
  useEffect(() => {
    const titleElements = [
      '.js-index1', '.js-index2', '.js-index3', '.js-index4', '.js-index5',
      '.js-index6', '.js-index7', '.js-index8', '.js-index9', '.js-index10',
      '.js-index11', '.js-index12', '.js-index13', '.js-index14', '.js-index15',
      '.js-index16',
    ];

    const titleDisplay = (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.add('title-effect');
      }
    };

    setTimeout(() => titleDisplay('.js-index1'), 400);
    setTimeout(() => titleDisplay('.js-index2'), 800);
    setTimeout(() => titleDisplay('.js-index3'), 1200);
    setTimeout(() => titleDisplay('.js-index4'), 1600);
    setTimeout(() => titleDisplay('.js-index5'), 2000);
    setTimeout(() => titleDisplay('.js-index6'), 2400);
    setTimeout(() => titleDisplay('.js-index7'), 2800);
    setTimeout(() => titleDisplay('.js-index8'), 3200);
    setTimeout(() => titleDisplay('.js-index9'), 3600);
    setTimeout(() => titleDisplay('.js-index10'), 4000);
    setTimeout(() => titleDisplay('.js-index11'), 4400);
    setTimeout(() => titleDisplay('.js-index12'), 5000);
    setTimeout(() => titleDisplay('.js-index13'), 5500);
    setTimeout(() => titleDisplay('.js-index14'), 5500);
    setTimeout(() => titleDisplay('.js-index15'), 5500);
    setTimeout(() => titleDisplay('.js-index16'), 5500);

    return () => {
      // Clean up if necessary
    };
  }, []);

  return null;
}