import React from 'react';
import Link from 'next/link'; // next/linkからLinkをインポート

export default function About() {
    return (
        <div className="box about" id="about">
            <h2 className="main-subject effect-fade6 bigtext">I am</h2>
            <div className="inner-area">
                <div className="flexbox effect-fade">
                    <img src="images/prof.jpg" className="prof effect-fade5" alt="profile" />
                    <div className="profile">
                        <dl>
                            <strong>RYOTA AOYAMA</strong>
                            <dt>
                                WEBディレクター/WEBエンジニア。<br />
                                制作会社にてプロジェクトのディレクション～制作を一貫して行っています。 これまでコーポレイトサイト、サービスサイト、ランディングページ、ECサイトなど多数のサイト、プロジェクトに携わらせていただき、 サイトを作成させて頂いております。<br />
                                接客・営業職も行っていた経験から、クライアント様にとってスムーズで気持ちの良いコミュニケーションを常日頃から心がけております。<br />
                                また、ＷＥＢサイトは「作って終わり」ではなく、運用して結果につなげていくために継続的な保守管理も承っております。<br />
                                WEBサイト制作に関することならどんなことでもまずはご相談ください。<br />
                            </dt>
                            <Link href="/about" className="btn-anime bgleft"><span>詳しく見る</span></Link> {/* Linkコンポーネントを使用 */}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
