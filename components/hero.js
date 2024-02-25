import React from 'react';
import BackgroundSlider from './BackgroundSlider'; // BackgroundSliderコンポーネントをインポート


export default function Hero() {
  return (
    <>
      <div className="js-menu">
        <div className="js-menu-title">
          <h1>
            RYOTA AOYAMA
            <br />
            <span className="smalltxt">WEB DESIGNER/WEB DEVELOPER</span>
          </h1>
        </div>
        <div className="js-top-description">
          <p>
            Web Design, Coading, Programming,
            <br />
            Ad Design, Web Writing, SEO and more...
          </p>
        </div>
        <div className="js-menu-list">
          <ul>
            <li>
              <a href="#about" className="js-menu-list__item">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#service" className="js-menu-list__item">
                SERVICE
              </a>
            </li>
            <li>
              <a href="#skill" className="js-menu-list__item">
                SKILL
              </a>
            </li>
            <li>
              <a href="#works" className="js-menu-list__item">
                WORKS
              </a>
            </li>
            <li>
              <a href="#message" className="js-menu-list__item">
                MESSAGE
              </a>
            </li>
            <li>
              <a href="#contact" className="js-menu-list__item">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
          <div className="logo js-index13">
            <a href="http://shinowd.com/">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="menu-circle js-index14"></div>
          <div className="top-text">
            <h1>
              <span className="js-index1">R</span>
              <span className="js-index2">Y</span>
              <span className="js-index3">O</span>
              <span className="js-index4">T</span>
              <span className="js-index5">A</span>{" "}
              <span className="js-index6">A</span>
              <span className="js-index7">O</span>
              <span className="js-index8">Y</span>
              <span className="js-index9">A</span>
              <span className="js-index10">M</span>
              <span className="js-index11">A</span>
              <br />
              <span className="smalltxt js-index12">
                WEB DESIGNER/WEB DEVELOPER
              </span>
            </h1>
          </div>
          <div className="top-description js-index15">
            <p>
              Web Design, Coading, Programming,
              <br />
              Ad Design, Web Writing, SEO and more...
            </p>
          </div>
     
    </>
  );
}
