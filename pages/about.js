import Meta from "/components/meta";
import React from "react";
import Menu from "/components/menu";

export default function AboutPg() {
    return (
        <>
            <Meta />
            <Menu />
            <div className="section about-section about-bg">
                <h2>ABOUT</h2>
            </div>

            <div className="inner-area">
                <div className="flexbox effect-fade ">

                </div>
            </div>
            <div className="about-section">
                <div className="modal">
                    <p className="close-btn">×</p>
                    <div className="bigimg">
                        <img src="" alt="" />
                    </div>

                </div>
                <div className="inner-area wide-border">
                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">好きなもの／こと／ひと</h2>
                        <p>静かな場所、本、音楽、早朝の空気、千葉ロッテマリーンズ</p>
                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">最も影響を受けた5冊</h2>
                        <ul>
                            <li>・<a href="https://amzn.asia/d/6yFNLIc" target="_blank" className="book">「自分の中に毒を持て」 岡本太郎(著)</a></li>
                            <li>・<a href="https://amzn.asia/d/iSVqWaX" target="_blank" className="book">「死ぬこと以外かすり傷」 箕輪厚介(著)</a></li>
                            <li>・<a href="https://amzn.asia/d/6evnc4Y" target="_blank" className="book">「7つの習慣」 スティーブン・R・コヴィー(著)</a></li>
                            <li>・<a href="https://amzn.asia/d/9a18Wio" target="_blank" className="book">「エッセンシャル思考」 グレッグ マキューン (著)</a></li>
                            <li>・<a href="https://amzn.asia/d/bQ0fob4" target="_blank" className="book">「確率思考の戦略論　ＵＳＪでも実証された数学マーケティングの力」 森岡 毅(著)</a></li>
                        </ul>
                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">仕事をする上で大切にしていること</h2>
                        <ul>
                            <li>・依頼者や周りの期待を越える仕事をする</li>
                            <li>・より良くするための方法を常に考える</li>
                            <li>・リスクを常に考える</li>
                            <li>・最後までやり切る</li>
                            <li>・感情的にならない</li>
                        </ul>

                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">デザイナー/デベロッパーとして大切にしていること</h2>
                        <ul>
                            <li>・制作物のアウトプットを常に考えた上で逆算する(集客orコンバージョン向上or認知度向上etc...)</li>
                            <li>・1pxにこだわる</li>
                            <li>・理由や意味のあるデザインを作る</li>
                            <li>・完成したと感じても再度入念に見直す</li>
                            <li>・第三者が修正しやすいデータを作成する</li>
                            <li>・可読性が高いコードを書く</li>
                        </ul>

                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">生きる上で大切にしていること</h2>
                        <ul>
                            <li>・いつ死ぬかは分からないので後悔しない選択をする</li>
                            <li>・自分の使うものは厳選し、長く使う</li>
                            <li>・周りの方に感謝の気持ちを伝える</li>
                        </ul>

                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">私はこんな人です</h2>
                        <ul>
                            <li>・素直</li>
                            <li>・心配性</li>
                            <li>・子供好き</li>
                            <li>・面倒見が良い</li>
                            <li>・物事に対する熱量が高い</li>
                            <li>・一人で出す成果よりもチームで出す成果の方が好き</li>
                        </ul>

                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">最近の興味関心事</h2>
                        <ul>
                            <li>・React.jsを使ったSPA開発</li>
                            <li>・Three.js</li>
                        </ul>

                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">今までの仕事で習得した主な知識、スキル</h2>
                        <ul>
                            <li>・WEB制作に伴う知識、スキル全般</li>
                            <li>・ホスピタリティ精神</li>
                            <li>・企画作成、運営力</li>
                            <li>・マネジメント力</li>
                        </ul>

                    </div>

                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">今後挑戦したい事</h2>
                        <ul>
                            <li>サービスを必要としているクライアント様が120%満足できるホスピタリティ溢れるWEBディレクターになること</li>
                        </ul>

                    </div>

                </div>
                <div className="inner-area">
                    <div className="about-section-block effect-fade">
                        <h2 className="about-title">略歴</h2>
                        <dl className="about-list">
                            <dt>1987</dt>
                            <dd>奈良県奈良市生まれ。物心ついた頃から両親の影響で絵ばかり描いていましたが、小学校1年生の時からギターをはじめ、高校を卒業するまで青春時代を音楽に捧げました。
                            </dd>
                            <dt>2008</dt>
                            <dd>ビジュアルアーツ専門学校を卒業。レコーディング技術や音響全般について学びました。同年に音響関係、スタジオ、ライブハウス、イベント企画などを運営する株式会社ベースオントップに新卒で入社。</dd>
                            <dt>2015</dt>
                            <dd>一般スタッフ、主任、店長を歴任し、2015年4月から<span className="bg-color-font">6店舗での統括マネージャー</span>を務めながら多数のイベント運営や店舗の課題解決、企画立案に関わる。その他チャリティーライブやイベントを多数開催し、<span className="bg-color-font">収益金の一部を東日本大震災孤児への募金に当てる</span>など活動に力を入れました。現場では<span className="bg-color-font">学校への営業や販売活動をしながらマネジメントに注力</span>し、<span className="bg-color-font">約50名のマネジメントに携わる。</span>また、アメ村周辺の清掃活動を定期的に行うなど、ボランティア活動も定期的に開催。</dd>
                            <dt>2020</dt>
                            <dd>2020年初旬からWEB制作の勉強を独学で始める。Progateやドットインストール、Udemyなどの動画教材や書籍で主に学習しつつ、メンタリングサービスでフィードバックを定期的に頂く形で学習。その後、2020年9月をもって家庭の事情により株式会社ベースオントップを退社。アントプロダクション株式会社に入社するも契約社員の期間で退職。</dd>
                            <dt>2021</dt>
                            <dd>1月ヒロセ通商株式会社に入社。広報部のWEB担当として、WEBサイトの制作や更新、<span className="bg-color-font">WEBマーケティングの観点からサイトの現状の分析を行いサイトや広告クリエイティブの改善や制作</span>を主な業務として行っております。</dd>

                        </dl>
                    </div>
                    <div className="inner-area">
                        <h2 className="about-title">Picture</h2>
                        <div className="about-section-block flexbox fwlap effect-fade">

                            <div className="pic-item">
                                <img src="/images/about-6pic.jpg" alt="" />
                                <p>1990　兄と。基本おとなしいおっとりした子供だったようです。</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-9pic.jpg" alt="" />
                                <p>2013　自身の誕生日イベントにて、お客様や同僚からお祝いコメントボードを頂いた時の一枚</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-8pic.jpg" alt="" />
                                <p> 2015　自身が主宰したイベントのフライヤー</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-3pic.jpg" alt="" />
                                <p> 2015　主宰したイベントの売上金を東日本大震災の震災孤児へ寄付</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-4pic.jpg" alt="" />
                                <p> 2016　定期的に行っていたアメ村での清掃活動時の集合写真</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-2pic.jpg" alt="" />
                                <p>2017　自身が企画したイベント出演頂いたバンドの皆さんと</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-1pic.jpg" alt="" />
                                <p>2018　開催イベントでの集合写真</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-5pic.jpg" alt="" />
                                <p> 2019　同僚、後輩たちと</p>
                            </div>
                            <div className="pic-item">
                                <img src="/images/about-7pic.jpg" alt="" />
                                <p> 2020　休日は家族で出かけることが多いです</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-section-block">
                        <h2 className="about-title">今回の転職に際して</h2>
                        <p>ここまでご覧いただきありがとうございます。自身は13年間いた会社を退社し、その後3ヶ月で早期退職、そして今の会社に入社しました。<br />
                            正直、転職回数が多くなってしまったという自覚はありますし、自身の考えが浅はかだったと感じる部分もあります。<br />
                            ただ、改めて自分と向き合い自分が何をしたいのか考えた時に、課題のある企業や人々にWEBの仕事を通じて役に立ちたいと強く思うようになりました。<br />
                            他者貢献をする時に、自身は自分の持っている力以上の実力を発揮する事を強く自覚しています。<br />
                            今までの経験を活かしながら、自身のスキルを発揮して貢献できる企業様とご縁がありますように。
                        </p>

                    </div>

                </div>
                <img className="line" src="/images/strength-line.svg" />
            </div>
            <div className="footer">
          <div className="copyright">
            <small>&copy; allrights reserved RYOTA AOYAMA 2022</small>
          </div>
        </div>

        </>
    );
}
