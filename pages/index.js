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
import TextTypingAnime from "/components/textTyping";
import ScrollToTopButton from "/components/toTop";

export default function Home() {
  return (
    <div>
      <BackgroundSlider />
      <Hero />
      <TextTypingAnime/>
      <MissionEffect />
      <Mission />
      <Menu />
      <EffectFade />
      <TitleDisplay />
      <ScrollToTopButton/>
      <Meta pageTitle="RYOTA AOYAMA/portfolio" />
 

      <div className="news">
        <div className="inner-area">
          <p>2024.02.01 ポートフォリオサイトを公開しました。</p>
        </div>
      </div>
      <div className="article">
        <About />
        <Service />
        <Skill />
        <Works />
        <Message />
        <div class="box contact effect-fade scrollify" id="contact" >
              <div class="inner-area">
                 <div class="works-wrapper">
                 <div class="contact">
                <p>お仕事のご依頼、お問い合わせは以下より</p>
                <a href="mailto:aoyamaryota.web@gmail.com">aoyamaryota.web@gmail.com</a>
            </div>
                  
                 </div>
               </div>
              </div>
        <div className="footer">
          <div className="copyright">
            <small>&copy; allrights reserved RYOTA AOYAMA 2024</small>
          </div>
        </div>
      </div>
    </div>
  );
}
