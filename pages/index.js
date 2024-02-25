import BackgroundSlider from "/components/BackgroundSlider";
import Hero from "/components/hero";
import Meta from "/components/meta";
import React from "react";
import Service from "/components/service";
import Skill from "/components/skill";
import Message from "/components/message";
import Works from "/components/works";
import About from "/components/about";
import Mission from "/components/mission";
import Menu from "/components/menu";
import MissionEffect from "/components/mission-effect";
import EffectFade from "/components/EffectFade";
import TitleDisplay from "/components/TitleDisplay";

export default function Home() {
  return (
    <div>
               <BackgroundSlider />
      <Hero />
      <MissionEffect />
      <Mission />
      <Menu />
      <EffectFade/>
      <TitleDisplay />
      <Meta pageTitle="RYOTA AOYAMA/portfolio" />
      <div className="to-top js-index16">
        <div className="to-top-item">
          <p>SCROLL TOP</p>
        </div>
      </div>

      <div className="news">
        <div className="inner-area">
          <p>2022.10.01 ポートフォリオサイトを公開しました。</p>
        </div>
      </div>
      <div className="article">
        <About />
        <Service />
        <Skill />
        <Works />
        <Message />

        <div className="footer">
          <div className="copyright">
            <small>&copy; allrights reserved RYOTA AOYAMA 2022</small>
          </div>
        </div>
      </div>
    </div>
  );
}
