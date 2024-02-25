import React, { useEffect, useState } from 'react';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMenuToggle = () => {
      setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    // メニューが描画された後にイベントリスナーを追加
    const circle = document.querySelector('.menu-circle');
    const menuItem = document.querySelectorAll('.js-menu-list__item');

    if (circle) {
      circle.addEventListener('click', handleMenuToggle);
    }

    if (menuItem) {
      menuItem.forEach(element => element.addEventListener('click', handleMenuToggle));
    }

    // コンポーネントがアンマウントされるときにイベントリスナーを削除
    return () => {
      if (circle) {
        circle.removeEventListener('click', handleMenuToggle);
      }
      
      if (menuItem) {
        menuItem.forEach(element => element.removeEventListener('click', handleMenuToggle));
      }
    };
  }, []);

  return (
    <div className={menuOpen ? 'js-menu open' : 'js-menu'}>
        <div className="js-menu-title">
          <h1>
            RYOTA AOYAMA<br />
            <span className="smalltxt">WEB DESIGNER/WEB DEVELOPER</span>
          </h1>
        </div>
        <div className="js-top-description">
          <p>
            Web Design,Coading,Programming,<br />
            Ad Design,Web Writing,SEO and more...
          </p>
        </div>
        <div className="js-menu-list">
          <ul>
            <li className="js-menu-list__item">
              <a href="#about">ABOUT</a>
            </li>
            <li className="js-menu-list__item">
              <a href="#service">SERVICE</a>
            </li>
            <li className="js-menu-list__item">
              <a href="#skill">SKILL</a>
            </li>
            <li className="js-menu-list__item">
              <a href="#works">WORKS</a>
            </li>
            <li className="js-menu-list__item">
              <a href="#message">MESSAGE</a>
            </li>
            <li className="js-menu-list__item">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
    </div>
  );
}
