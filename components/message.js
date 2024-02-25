import React from 'react';

export default function Message() {
    return (
        <div className="box message" id="message">
            <h2 class="main-subject effect-fade6 bigtext">MESSAGE</h2>

            <div className="inner-area">
                <h3 className="effect-fade5">お客様のホームページを<br />制作するうえで私は<br />
                    <span className="message-span">3つ</span>の<span className="message-span">お約束</span>をしています。</h3>
                <div className="message-flex effect-fade">
                    <div className="message-text">
                        <h4>常に期待を超えられるよう最善を尽くします</h4>
                        <p>サービス業に長年従事していたこともあり、お客様の期待を超える仕事が出来た時に喜ばれる瞬間が一番大好きです。</p>
                    </div>
                </div>

                <div className="message-flex effect-fade">
                    <div className="message-text">
                        <h4>気持ちの良いコミュニケーション</h4>
                        <p>10年以上の接客業/サービス業で培ったホスピタリティでスムーズかつ快適なコミュニケーションをお約束します。私は常に「どうすればお客様の期待を超えられるか？」を考え、その期待を超えるための努力を惜しまず行います。</p>
                    </div>
                </div>

                <div className="message-flex effect-fade">
                    <div className="message-text">
                        <h4>常に学び続ける向上心と姿勢</h4>
                        <p>Web業界は技術の進歩が早く次々と新しいツールや言語が登場します。常に新しいものに興味を示し、今よりもっと良い方法はないか、という姿勢でインプット・アウトプットに日々励んでおります。自分自身がスキルアップする事はお客様に提供できる価値が増える事だと私は考えているので常に学ぶ姿勢を持ち、ご対応させていただく際にはお客様の要望に一番ベストな選択を行う事をお約束します</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
