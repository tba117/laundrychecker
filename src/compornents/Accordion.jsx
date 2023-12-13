import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Accordion = () => {
  const [ content, setContent ] = useState(null);  //contentの初期値はNULL
  const [ showResult, setShowResult ] = useState(false);  //showResultの初期値はfalse
  const [ selectedContents, setSelectedContents ] = useState([]);  //選択中の画像、テキストリスト

  //.jsonファイルから値を取得する
  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get('/accordioncontent.json');  //.jsonファイルの取得
        setContent(response.data);  //contentにセット
      } catch (error){
        console.error('Error fetching data: ',error);  //エラーの場合
      }
    }
    fetchData();
  }, [])

  //選択中エリアに表示したり
  const showContent = (contentsKey) => {
    //選択されたボタンを表示
    const contents = content && content[contentsKey];  //ContentsKeyを使用しcontentから画像とテキストを取得
    setSelectedContents([...selectedContents, contents]); //selectedContentsにcontents(画像とテキスト)を追加していく
  };

  //結果を表示する関数
  const Result = () => {
    setShowResult(!showResult);
  };

  //選択をクリアする関数
  const clearSelection = () => {
    setSelectedContents([]);   //selectedContentsを無くして空にする
  };


  return (
    <div>
    <div className="bigimage">
          <h2>洗濯表示がわからない!</h2>
          <p>当サイト「洗濯表示チェッカー」は衣類等に記載してある洗濯表示が簡単に確認できるサイトです。</p>
          <p>完全無料で利用できます。結果がすぐにわかります。</p>
          <p>まずは洗濯表示を選択してみましょう！</p>
      </div>

    <div className='content'>
        <div className='accordions'>
          <details className="accordion001">
                <summary>家庭洗濯</summary>
                 <div className="button001">
                    <button type="button" onClick={() => showContent('accordion1-1')}>
                      <img
                        src="img/box01_icon10.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-2')}>
                      <img
                        src="img/box01_icon11.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-3')}>
                      <img
                        src="img/box01_icon12.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-4')}>
                      <img
                        src="img/box01_icon07.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-5')}>
                      <img
                        src="img/box01_icon08.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-6')}>
                      <img
                        src="img/box01_icon09.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-7')}>
                      <img
                        src="img/box01_icon05.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-8')}>
                      <img
                        src="img/box01_icon06.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-9')}>
                      <img
                        src="img/box01_icon03.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-10')}>
                      <img
                        src="img/box01_icon04.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-11')}>
                      <img
                        src="img/box01_icon02.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-12')}>
                      <img
                        src="img/box01_icon01.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-13')}>
                      <img
                        src="img/box01_icon13.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion1-14')}>
                      <img
                        src="img/box01_icon14.png"
                      />
                    </button>
                </div>
              </details>

              <details className="accordion002">
                <summary>漂白</summary>
                <div className="button002">
                    <button type="button" onClick={() => showContent('accordion2-1')}>
                      <img
                        src="img/box02_icon01.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion2-2')}>
                      <img
                        src="img/box02_icon02.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion2-3')}>
                      <img
                        src="img/box02_icon03.png"
                      />
                    </button>
                </div>
              </details>

              <details className="accordion003">
                <summary>乾燥方法</summary>
                <div className="button003">
                    <button type="button" onClick={() => showContent('accordion3-1')}>
                      <img
                        src="img/box03_icon01.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion3-2')}>
                      <img
                        src="img/box03_icon02.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion3-3')}>
                      <img
                        src="img/box03_icon03.png"
                      />
                    </button>
                </div>
              </details>

              <details className="accordion004">
                <summary>干し方</summary>
                <div className="button004">
                    <button type="button" onClick={() => showContent('accordion4-1')}>
                      <img
                        src="img/box07_icon01.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion4-2')}>
                      <img
                        src="img/box07_icon02.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion4-3')}>
                      <img
                        src="img/box07_icon03.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion4-4')}>
                      <img
                        src="img/box07_icon04.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion4-5')}>
                      <img
                        src="img/box07_icon05.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion4-6')}>
                      <img
                        src="img/box07_icon06.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion4-7')}>
                      <img
                        src="img/box07_icon07.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion4-8')}>
                      <img
                        src="img/box07_icon08.png"
                      />
                    </button>
                </div>
              </details>

              <details className="accordion005">
                <summary>アイロン</summary>
                    <div className="button005">
                    <button type="button" onClick={() => showContent('accordion5-1')}>
                      <img
                        src="img/box04_icon01.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion5-2')}>
                      <img
                        src="img/box04_icon02.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion5-3')}>
                      <img
                        src="img/box04_icon03.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion5-4')}>
                      <img
                        src="img/box04_icon04.png"
                      />
                    </button>
                </div>
              </details>

              <details className="accordion006">
                <summary>クリーニング</summary>
                <div className="button006">
                    <button type="button" onClick={() => showContent('accordion6-1')}>
                      <img
                        src="img/box05_icon01.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-2')}>
                      <img
                        src="img/box05_icon02.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-3')}>
                      <img
                        src="img/box05_icon03.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-4')}>
                      <img
                        src="img/box05_icon04.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-5')}>
                      <img
                        src="img/box05_icon05.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-6')}>
                      <img
                        src="img/box06_icon01.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-7')}>
                      <img
                        src="img/box06_icon02.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-8')}>
                      <img
                        src="img/box06_icon03.png"
                      />
                    </button>
                    <button type="button" onClick={() => showContent('accordion6-9')}>
                      <img
                        src="img/box06_icon04.png" 
                      />
                    </button>
                </div>
              </details>
          </div>

              <div className="selected-area">
                <p>選択中の洗濯表示：</p>
              <div className="selected-image">
                {selectedContents.map((selectedImage, index) => (   //process.env.PUBLIC_URL：ローカルホストのURL
                    <img src={process.env.PUBLIC_URL + '/' + selectedImage.image} alt="選択中の画像"{...index} key={index}/>
               
                ))}
                </div>
                  <button onClick={clearSelection} className='clearbutton'>選択をクリア</button>
              </div>

              <button onClick={Result} className='resultbutton'>結果を表示</button>

              {showResult && (  //showResultがtrueなら表示
                <div className='result-area'>
                  <h3>＜結果はこちら＞</h3>
                  {selectedContents.map((selectedText, index) => (  //selectedContentsをselectedtextにいれて
                    <p key={index}>・{selectedText.text}</p>  //selectedcontentsのtextを取り出す
                  ))}
                </div>
              )}
      </div>
     </div>
  )
}

export default Accordion