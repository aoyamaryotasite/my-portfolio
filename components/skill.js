import React from 'react';

export default function Skill() {
    return (
        <div className="box skill" id="skill">
            <h2 class="main-subject effect-fade6 bigtext">SKILLS</h2>


            <div className="inner-area">
                <div className="flexbox effect-fade">
                    <div className="gridbox effect-fade">
                        <img src="../images/skill-htmlcss.jpg" alt="HTML/CSS" />
                        <img src="images/skill-js.jpg" alt="JavaScript" />
                        <img src="images/skill-jq.jpg" alt="jQuery" />
                        <img src="images/skill-php.jpg" alt="PHP" />
                        <img src="images/skill-wp.jpg" alt="WordPress" />
                        <img src="images/skill-pa.jpg" alt="Photoshop/Illustrator" />
                    </div>

                    <div className="text effect-fade">
                        <dl>
                            <dt>HTML/CSS</dt>
                            <dd>使用歴3年。W3Cに準拠し、SEOにも対応した適切なマークアップを心がけています。また、CSSに関しては「修正しやすく、分かりやすい」書き方を常に意思したCSS設計を心がけています。</dd>

                            <dt>JavaScript</dt>
                            <dd>使用歴2年。jQueryだけではなく、バニラJSでの1からのプログラミングが可能。動くサイトの制作やフォームのバリデーションの実装を行います。</dd>

                            <dt>PHP</dt>
                            <dd>使用歴2年。お問い合わせフォームやログイン機能、パッチ処理などの実装が可能です。</dd>

                            <dt>WordPress</dt>
                            <dd>使用歴2年。HTMLやPHPファイルからオリジナルのテーマの作成が可能です。オリジナルテーマ制作と既存テーマのカスタマイズが可能です。LPから個人ブログまで様々なホームページの対応が可能です。</dd>

                            <dt>Photoshop/Illustrator</dt>
                            <dd>使用歴3年。バナーやアイコンの作成、写真の加工が可能です。写真のレタッチ・リサイズや画像の切り抜きなどの対応も可能です。Photoshopで作成されたデザインカンプからのコーディングにも対応しております。</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
