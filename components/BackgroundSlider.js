import React, { useState, useEffect } from 'react';

const BackgroundSlider = () => {
  // 背景画像のURLを保持するstate
  const [backgroundImage, setBackgroundImage] = useState('');

  // 背景画像のリスト
  const backgroundImageList = [
    'url(/images/top.jpg)',
    'url(/images/top2.jpg)',
    'url(/images/top3.jpg)',
    // 他の背景画像のURLを追加
  ];

  useEffect(() => {
    // 背景画像を一定期間ごとに変更する処理
    const intervalId = setInterval(() => {
      // ランダムに背景画像を選択
      const randomIndex = Math.floor(Math.random() * backgroundImageList.length);
      const newBackgroundImage = backgroundImageList[randomIndex];
      setBackgroundImage(newBackgroundImage);
    }, 5000); // 5000ミリ秒ごとに背景画像を変更

    // コンポーネントがアンマウントされたときにクリーンアップ
    return () => {
      clearInterval(intervalId);
    };
  }, []); // 最初のマウント時のみ実行する

  return (
    <div
      className="background-slider"
      style={{
        backgroundImage,
        transition: 'background-image 2s ease', // 背景画像の切り替えを2秒かけてふわっと行うトランジションを追加
      }}
    >
      {/* ここに背景画像が表示される */}
    </div>
  );
};

export default BackgroundSlider;
