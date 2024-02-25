import React from 'react';

export default function Service() {
    return (
        <div className="box " id="service">
            <h2 class="main-subject effect-fade6 bigtext">SERVICE</h2>

            <div className="inner-area">
                <div className="flexbox">
                    <div className="flexbox-parts effect-fade">
                        <h3>WEBデザイン</h3>
                        <img src="images/service-design.jpg" alt="web design" />
                        <p>WordPressを利用してお客様で更新が可能なホームページを制作いたします。パソコンの操作が苦手な方でも分かりやすくご説明いたしますのでご安心くださいませ。コーポレートサイト、個人ブログ、LP等の対応が可能です。</p>
                    </div>
                    <div className="flexbox-parts ">
                        <h3>コーディング</h3>
                        <img src="images/service-cording.jpg" alt="coding" />
                        <p>HTML/CSS/JavaScript/PHPを行ったWEBサイトの構築を行います。WordPressのテーマ開発も一から行います。ホームページ公開後の保守はもちろん、SEO・アクセシビリティを意識したコーディングを常に心がけております。PSD/XDのデザインデータにて承ります。</p>
                    </div>
                    <div className="flexbox-parts ">
                        <h3>クリエイティブ制作</h3>
                        <img src="images/service-ad.jpg" alt="creative" />
                        <p>Photoshopを使用した広告クリエイティブの制作、デザインカンプの制作など行います。お客様の商品やサービスがより多くの人の目に留まるよう、訴求文から全体のデザインまでご提案させていただきます。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
