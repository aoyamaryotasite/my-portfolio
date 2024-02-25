import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // スクロールイベントのリスナー
  useEffect(() => {
    // スクロール時にトップへ戻るボタンの表示・非表示を切り替える
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    // イベントリスナーを追加
    window.addEventListener('scroll', handleScroll);

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // トップへスクロールする関数
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // スムーススクロールを有効にする
    });
  }

  // トップへ戻るボタンの表示
  return (
    <>
      {isVisible && (
        <div className="to-top" onClick={scrollToTop}>
          <div className="to-top-item">
            <p>SCROLL TOP</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
